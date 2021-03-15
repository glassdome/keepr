import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Note, { NoteData } from './Note'

describe('Note', () => {
  const noteTitle1 = 'foo';
  const noteBody1 = 'bar';

  const setup = (data?: Partial<NoteData>) => {
    const other = data ? data : {}
    const props = {...{id: '1', title: noteTitle1, body: noteBody1}, ...other};  
    return render(<Note {...{note: props}} />)
  }

  /* Get the entire note component */
  const getNote = () => screen.getByRole('article');
  

  it('Renders without error', () => {
    setup()
    expect(screen.getByRole('article')).toBeVisible();
  });

  it('Displays the given title', () => {
    setup();
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(noteTitle1);
  });

  it('Accepts and displays an empty title', () => {
    setup({title: ''});
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('');
  });

  it('Displays the given body.', () => {
    setup();
    expect(screen.getByTestId('note-body')).toHaveTextContent(noteBody1);
  });
  
  it('Accepts and displays empty body text.', () => {
    setup({body: ''});
    expect(screen.getByTestId('note-body')).toHaveTextContent('')
  });

  it('Does NOT render if both title and body are empty.', () => {
    const { queryAllByRole } = setup({title: '', body: ''});
    const results = queryAllByRole('article');
    expect(results.length).toEqual(0);
  });
  
  it('Displays NoteControls and PushPin when hovered.', () => {
    setup();
    fireEvent.mouseOver(getNote())
    const controls = screen.getByTestId('note-controls');
    const pushpin = screen.getByTestId('note-push-pin');

    expect(controls).toBeVisible();
    expect(pushpin).toBeVisible();
  });

  /*
   * TODO: This test currently fails. Need to figure out how to test whether or not a 
   * component can be seen. `.toBeVisible()` seems to just test whether or not the element
   * is in the DOM - not whether or not it can be seen (i.e., `opacity: 0;`).
   * Attempting to get the style with `.toHaveStyle` doesn't seem to work either.
   * Will have to dig into this more.
   */
  it.skip('Does NOT display NoteControls and PushPin when NOT hovered.', () => {
    // setup();
    // const controls = screen.getByTestId('note-controls');
    // const pushpin = screen.getByTestId('note-push-pin');
    // console.log(controls.style.opacity)
    // expect(controls).not.toBeVisible();
    // expect(pushpin).toHaveStyle('opacity: 0;')
  });

  /*
   * TODO: This works, but I don't like it. We shouldn't be testing the internal logic of 
   * setting internal state - what we care about in this case is if the NoteEditor shows up 
   * when the Note is clicked. The NoteEditor is rendered via `.createPortal` - so it isn't 
   * clear how to get a reference to check.
   */
  it('Sets `isEditing` to TRUE when clicked.', () => {
    const mockSetIsEditing = jest.fn();
    React.useState = jest.fn(() => [false, mockSetIsEditing]);
    setup();
    fireEvent.click(getNote());
    expect(mockSetIsEditing).toHaveBeenCalledWith(true);
    mockSetIsEditing.mockClear();
  });

});
