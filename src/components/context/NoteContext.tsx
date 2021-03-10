import React from 'react';

import { NoteData, NoteFunction } from '../Notes';

//type NoteEditFunction = (note: NoteData) => void;
type NoteFunctionContextType = {
  onUpdate: NoteFunction;
  onCreate: NoteFunction;
  onDelete: NoteFunction;
}

const NoteContext = React.createContext<NoteFunctionContextType | {}>({});

export type { NoteFunction, NoteFunctionContextType};
export default NoteContext;

