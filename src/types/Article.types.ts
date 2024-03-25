export type Article = {
  id?: string
  title: string
  price: number
  tva: number
}

export const ArticleDefault: Article = {
  id: undefined,
  title: '',
  price: 0,
  tva: 20
}
