import BookModel from "../../model/Book";
import HtmlBookModel from "../../model/HtmlBook";

export interface ViewerProps {
  book: BookModel;
  currentBook: BookModel;
  books: BookModel[];
  isReading: boolean;
  htmlBook: HtmlBookModel;
  handleRenderFunc: (renderFunc: () => void) => void;
  t: (title: string) => string;
  handleReadingState: (isReading: boolean) => void;
  handleReadingBook: (book: BookModel) => void;
  handleHtmlBook: (htmlBook: HtmlBookModel) => void;
  handleLeaveReader: (position: string) => void;
  handleFetchBooks: () => void;
  handleCurrentChapter: (currentChapter) => void;
}
export interface ViewerState {
  key: string;
  scale: string;
  isFirst: boolean;
  chapterTitle: string;
  margin: number;
  readerMode: string;
}
