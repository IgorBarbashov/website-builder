import img1 from './assets/gory-doroga-gryada-sneg-tuman.jpg';
import img2 from './assets/s1200.jpeg';

export const model = [
  { type: 'title', value: 'Test title', options: {
    tag: 'h2',
    styles: 'background: darkred; color: #fff;'
  } },
  { type: 'text', value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ipsum nesciunt reprehenderit repellendus quia laboriosam non minima, quam magni, asperiores vel accusamus quidem omnis perferendis ad! Est, omnis maiores cumque aperiam corrupti, itaque similique perspiciatis tenetur dolores eaque eligendi, quam et neque quo soluta magnam officiis dicta eos? Laudantium odit ad aut recusandae est in modi illo deleniti. Reiciendis expedita saepe eos libero voluptas ipsa deleniti, rerum velit cupiditate atque mollitia error quaerat id ab harum. Eius ipsam, quos amet similique iste ullam reiciendis molestiae cumque repellendus blanditiis saepe quas numquam soluta dolor autem beatae perferendis vero enim, molestias animi fugiat ut quaerat! Nulla, ullam? Pariatur neque repudiandae omnis harum voluptatem minus labore ratione cupiditate exercitationem dolor nihil velit iure est quidem, iste nemo. Illum sequi cum porro culpa cupiditate delectus sed, illo officia voluptas ad odio autem deserunt laborum doloribus ducimus quas dolore laboriosam? Quisquam quia iure reiciendis quod iste quas! Nisi autem ab adipisci atque mollitia ratione, dolore ex eos corrupti non harum voluptate laborum nam quia doloribus ducimus. Deserunt voluptas facilis similique dolore? Neque id nobis quis ipsam voluptates ipsa sunt. Debitis, sed explicabo! Officia, dolor. Nihil, incidunt. Molestias iure architecto, nihil amet nesciunt repellat nam blanditiis.', options: {
    styles: 'background: darkblue; color: yellow;'
  } },
  { type: 'textColumns', value: [
    'text-1', 'text-2', 'text-3', 'text-4', 'text-5'
  ], options: {
    styles: 'background: black; color: #fff; padding: 1rem;'
  } },
  { type: 'img', value: img1, 
    imgOptions: {
      alt: 'Первое изображение',
      styles: 'width: 500px;',
    },
    rowOptions: {
      styles: 'margin: 20px;display:flex;justify-content:center;',
    }
  },
  { type: 'img', value: img2, 
    imgOptions: {
      alt: 'Второе изображение',
      styles: 'width: 500px;',
    },
    rowOptions: {
      styles: 'margin: 20px;display:flex;justify-content:center;',
    },
  },
];
