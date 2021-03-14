import React from 'react';
import { NoteFunction } from '../Notes';

type NoteFunctionContextType = {
  onUpdate: NoteFunction;
  onCreate: NoteFunction;
  onDelete: NoteFunction;
}

const NoteContext = React.createContext<NoteFunctionContextType | {}>({});

export type { NoteFunction, NoteFunctionContextType};
export default NoteContext;

