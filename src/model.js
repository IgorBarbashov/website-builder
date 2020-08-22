import { TitleBlock, TextBlock, TextColumnBlock, ImgBlock } from './classes/blocks';
import { css } from './utils';
import img1 from './assets/gory-doroga-gryada-sneg-tuman.jpg';
import img2 from './assets/s1200.jpeg';

const longText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ipsum nesciunt reprehenderit repellendus quia laboriosam non minima, quam magni, asperiores vel accusamus quidem omnis perferendis ad! Est, omnis maiores cumque aperiam corrupti, itaque similique perspiciatis tenetur dolores eaque eligendi, quam et neque quo soluta magnam officiis dicta eos? Laudantium odit ad aut recusandae est in modi illo deleniti. Reiciendis expedita saepe eos libero voluptas ipsa deleniti, rerum velit cupiditate atque mollitia error quaerat id ab harum. Eius ipsam, quos amet similique iste ullam reiciendis molestiae cumque repellendus blanditiis saepe quas numquam soluta dolor autem beatae perferendis vero enim, molestias animi fugiat ut quaerat! Nulla, ullam? Pariatur neque repudiandae omnis harum voluptatem minus labore ratione cupiditate exercitationem dolor nihil velit iure est quidem, iste nemo. Illum sequi cum porro culpa cupiditate delectus sed, illo officia voluptas ad odio autem deserunt laborum doloribus ducimus quas dolore laboriosam? Quisquam quia iure reiciendis quod iste quas! Nisi autem ab adipisci atque mollitia ratione, dolore ex eos corrupti non harum voluptate laborum nam quia doloribus ducimus. Deserunt voluptas facilis similique dolore? Neque id nobis quis ipsam voluptates ipsa sunt. Debitis, sed explicabo! Officia, dolor. Nihil, incidunt. Molestias iure architecto, nihil amet nesciunt repellat nam blanditiis.';

export const model = [
  new TitleBlock('Test title', { tag: 'h2',
    styles: css({
      background: 'darkred',
      color:' #fff',
      'text-align': 'center',
    })
  }),
  new TextBlock(longText, { styles: 'background: darkblue; color: yellow;' }),
  new TextColumnBlock(['text-1', 'text-2', 'text-3', 'text-4', 'text-5'],
    { styles: 'background: black; color: #fff; padding: 1rem;' }
  ),
  new ImgBlock(img1,
    { alt: 'Первое изображение', styles: 'width: 500px;' },
    { styles: 'margin: 20px;display:flex;justify-content:center;' }
  ),
  new ImgBlock(img2,
    { alt: 'Второе изображение', styles: 'width: 500px;' },
    { styles: 'margin: 20px;display:flex;justify-content:center;' },
  ),
];