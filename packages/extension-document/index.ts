import { createNode } from '@tiptap/core'

// export default new Node()
//   .name('document')
//   .topNode()
//   .schema(() => ({
//     content: 'block+',
//   }))
//   .create()

// export default class Document extends Node {

//   name = 'document'

//   topNode = true

//   content = 'block+'

// }

export default createNode({
  name: 'document',

  topNode: true,

  content: 'block+',
})