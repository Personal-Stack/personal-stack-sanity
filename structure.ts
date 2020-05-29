import S from '@sanity/desk-tool/structure-builder';
import { MdPerson, MdPortrait, MdList } from 'react-icons/md';
import { FaBlog, FaUser, FaShareSquare, FaBookOpen } from 'react-icons/fa';

export default () =>
  S.list()
    .title('Personal web site')
    .items([
      S.listItem().title('Author').icon(MdPerson).child(
        S.editor()
          .schemaType('author')
          .documentId('001a79fe-1f63-4deb-b3f2-ff3b6f2f4d92')
      ),
      S.divider(),
      S.listItem().title('Portfolio').icon(MdPortrait).child(
        S.list().title('Content').items([
          S.listItem().title('CV').icon(FaUser).child(
            S.editor()
              .title('CV')
              .schemaType('portfolio')
              .documentId('2793b21d-b6af-4b5e-8016-e283bde0af7f')
          ),
          S.listItem().title('Tech Skills').icon(FaBookOpen).child(
            S.documentTypeList('technicalSkill')
          ),
        ])
      ),
      S.divider(),
      S.listItem().title('Blog').icon(FaBlog).child(
        S.list().title('Content').items([
          S.listItem().title('Posts').child(S.documentTypeList('post')),
          S.listItem().title('Series').child(S.documentTypeList('postSeries')),
          S.listItem().title('Tags').icon(MdList).child(
            S.documentTypeList('tag')
          ),
        ])
      ),
      S.divider(),
      S.listItem().title('Social Links').icon(FaShareSquare).child(
        S.documentTypeList('socialLink')
      ),
    ]);