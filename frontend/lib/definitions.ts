export type Book = {
  book_id: number
  book_owner: string
  book_author: string
  book_title: string
  review: string
  cover_image: string
  requested: boolean
}

export type Comment = {
  comment_id: number
  comment_owner: string
  uploaded_at: Date // this might have to be changed to string
  comment: string
}
