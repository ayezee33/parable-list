export interface BibleReference {
  book: string;
  chapter: number;
  verse: string;
}

export interface PracticalPoint {
  title: string;
  points: string[];
}

export interface RelatedParable {
  id: string;
  title: string;
  reference: string;
  theme: string;
}

export interface Parable {
  id: string;
  title: string;
  bibleReference: BibleReference;
  categories: string[];
  tags: string[];
  testament: 'old' | 'new';
  biblicalText: string;
  context: string;
  theologicalInterpretation: string;
  practicalApplications: PracticalPoint[];
  keyTakeaways: string[];
  relatedParables: RelatedParable[];
} 