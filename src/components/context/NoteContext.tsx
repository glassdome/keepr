import React from 'react';

import { NoteData } from '../Notes';

type NoteEditFunction = (note: NoteData) => void;
type NoteFunctionContextType = {
  onUpdate: NoteEditFunction;
  onCreate: NoteEditFunction;
}

// const NoteContext = ({onUpdate, onCreate}: NoteFunctions): React.Context<NoteFunctions> => 
//   React.createContext<NoteFunctions>({ onUpdate, onCreate });

const NoteContext = React.createContext<NoteFunctionContextType | {}>({});

export type { NoteEditFunction, NoteFunctionContextType};
export default NoteContext;
