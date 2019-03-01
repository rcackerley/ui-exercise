// @flow strict @format

export type Email = {
  id: string,
  subject: string,
  sender: string,
  body: string,
  tags: string[],
  date: string,
  starred: boolean,
  checked: boolean,
  important: boolean
}
