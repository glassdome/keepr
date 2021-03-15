import {useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { CognitoIdToken } from 'amazon-cognito-identity-js';

import { Nav, Header, Workspace } from "../layout";
import { NoteData } from "../Notes";
import { NoteContext } from '../context';
import { db } from "../../data/db";
import { useAuth } from '../Auth/AuthProvider/AuthProvider';

import { Archive, Labels, Reminders, Trash, UserProfile } from '../pages'

import "../../styles.scss";
import { User } from '../../models/data';

const newUser = (token: CognitoIdToken): User => ({
    id: token.payload.sub,
    email: token.payload.email,
    firstName: token.payload.given_name,
    lastName: token.payload.family_name
});

const Keepr = () => {
  const [notes, setNotes] = useState<NoteData[]>([]);
  const [user, setUser] = useState<Partial<User>>({});
  const auth = useAuth();


  useEffect(() => {
    // Load notes from datasource.
    setNotes(db.notes as NoteData[]);

    // Get user data from current auth session.
    if (auth.getSession) {
      auth.getSession().then((session) => {
        setUser( newUser( session.getIdToken() ) )
        console.log('User', user);
      });
    }
  }, []);


  // TODO: Implement setting the 'modified' timestamp on update.
  const updateNote = (data: NoteData): void => {
    const index = notes.findIndex((n: NoteData) => n.id === data.id);
    if (index < 0) {
      console.warn(`Note with ID ${data.id} not found. Cannot update.`);
    } else {
      notes.splice(index, 1, data);
      setNotes([...notes]);
    }
  };

  const createNote = (newNote: NoteData): void => {
    setNotes([...notes, newNote]);
  }

  const upsertNote = (note: NoteData): void => {
    if (notes.find(n => n.id === note.id) === undefined) {
      createNote(note);
    } else {
      updateNote(note);
    }
  }
  
  const deleteNote = (note: NoteData): void => {
    const index = notes.findIndex((n: NoteData) => n.id === note.id);
    if (index < 0) {
      console.warn(`Note with ID ${note.id} not found. No changes made.`);
    } else {
      notes.splice(index, 1);
      setNotes([...notes]);
    }
  }

  const functions = {
    onUpdate: upsertNote,
    onCreate: createNote,
    onDelete: deleteNote
  }

  let { url } = useRouteMatch();


  return (
    <NoteContext.Provider value={functions}>
      <div className="App">
        <Header />
        <Nav />

        <Switch>
          <Route exact={true} path="/notes">
            <Workspace notes={notes} />
          </Route>
          <Route path={`${url}/reminders`} component={Reminders} />
          <Route path={`${url}/labels`} component={Labels} />
          <Route path={`${url}/archive`} component={Archive} />
          <Route path={`${url}/trash`} component={Trash} />
          <Route path={`${url}/profile`} component={UserProfile} />
        </Switch>
      
      </div>
    </NoteContext.Provider> 
  );
}
export default Keepr;

