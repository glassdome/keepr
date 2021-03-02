export enum NoteType {
  PlainText,
  CheckList,
  Markdown,
  Todo
}

export interface Timestamp {
  created: {
    user: string;
    datetime: string;
  };
  modified: {
    user: string;
    datetime: string;
  };
}

export interface Note<T> {
  id: string;
  type: NoteType;
  owner: string;
  timestamp: Timestamp;
  pinned: boolean;
  archived: boolean;
  labels: string[];
  collaborators: string[];
  title: string;
  body: T;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  contacts: User[];
}

/*

Need lookups for:
- Note Colors
- Labels

*/
