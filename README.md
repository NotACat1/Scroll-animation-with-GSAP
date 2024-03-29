# Анимация скролла с использованием GSAP

![Интро](https://github.com/NotACat1/Scroll-animation-with-GSAP/assets/113008873/2aa89e6e-7679-4f47-a6a0-a8ed3cf28fbe)

## О проекте

[Creative scroll](https://notacat1.github.io/Scroll-animation-with-GSAP/) - на этом веб-сайте вы сможете увидеть в действии, как эффективно можно улучшить пользовательский опыт с помощью библиотеки GSAP. Особенно впечатляющими элементами являются плавная анимация прокрутки страницы и захватывающие эффекты, сопровождающие появление карточек контента. Эти динамичные и привлекательные анимации могут сделать взаимодействие с веб-сайтом более интересным и запоминающимся для посетителей.

Идея взята с видеоурока: [https://youtu.be/zKjYfxei5vc](https://youtu.be/zKjYfxei5vc)

## Реализованный функционал

### 1. Плавный скроолл

Благодаря плагину ScrollSmoother библиотеки GSAP, реализация плавной прокрутки на вашем веб-сайте становится простой и эффективной задачей. Этот плагин обеспечивает плавные и естественные переходы при прокрутке страницы, создавая более приятное визуальное восприятие для пользователей.

### 2. Плавное поялвение и исчезновение карточек

С помощью библиотеки GSAP и плагина ScrollTrigger вы можете легко добавлять анимации к объектам, которые будут активироваться при достижении определенной высоты на странице. Этот подход позволяет создавать интересные эффекты, которые зависят от прокрутки пользователя, улучшая визуальный опыт на вашем сайте.

### 3. Адаптивная верстка

Адаптивная верстка обеспечивает автоматическое приспособление сайта под самые широкие и узкие экраны. На этом веб-сайте, начиная с планшетных экранов (768 пикселей), реализовано отображение карточек в два столбца, в то время как на более маленьких экранах - только в один столбец. Это позволяет обеспечить оптимальное визуальное представление контента на различных устройствах.

## Используемые технологии

### 1. GSAP

[GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/) - это мощная JavaScript-библиотека для создания анимаций и интерактивных элементов на веб-сайтах. Она предоставляет инструменты для плавной и гибкой анимации различных свойств HTML-элементов, CSS и SVG, а также поддерживает создание сложных временных линий и последовательностей анимаций. GSAP широко используется в веб-разработке благодаря своей производительности и простому в использовании API.

#### 1.1 ScrollTrigger

[Плагин ScrollTrigger](https://greensock.com/scrolltrigger/) для библиотеки GSAP - это мощный инструмент, который позволяет легко создавать анимации, связанные с прокруткой страницы. Он обеспечивает точный контроль над тем, как элементы анимируются при прокрутке, позволяя создавать интересные эффекты, активируемые при достижении определенных точек на странице. ScrollTrigger позволяет настраивать анимации, исходя из положения прокрутки, создавая плавные переходы, параллакс эффекты и другие динамичные визуальные изменения. Этот плагин значительно улучшает интерактивность и визуальный опыт на веб-сайтах.

#### 1.2 ScrollSmoother

[Плагин ScrollSmoother](https://greensock.com/scrollsmoother/) упрощает добавление эффекта плавной и пластичной вертикальной прокрутки на ваши веб-страницы с использованием ScrollTrigger в библиотеке GSAP. Этот плагин изначально использует встроенный механизм прокрутки, что позволяет избежать многих проблем, связанных с доступностью, которые могут влиять на сайты с кастомной прокруткой. ScrollSmoother исключает любые искусственные полосы прокрутки и не требует манипуляций с указателями или функциями сенсорных устройств.

### 2. Normalize.css

[Normalize.css](https://necolas.github.io/normalize.css/) предоставляет браузерам возможность более последовательного отображения всех элементов согласно современным стандартам. Он акцентируется на нормализации только тех стилей, которые действительно требуют коррекции.

```css
/* index.css */
@import url(../vendor/normalize.css);
```

### 3. Webpack

[Webpack](https://webpack.js.org/) - это инструмент с открытым исходным кодом для сборки веб-приложений. Он позволяет объединять различные файлы, такие как HTML, CSS, JavaScript, изображения, в единый пакет для оптимизированной доставки на веб-сервер. Webpack также поддерживает использование различных загрузчиков и плагинов, что облегчает процесс разработки, минимизации и управления зависимостями.

Настройки Webpack:

```js
// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: './src/pages/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '',
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    port: 8080
  },
  module: {
    rules: [{
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset/resource',
        generator: {
            filename: 'images/[name].[hash][ext]',
          }
      },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
      generator: {
            filename: 'fonts/[name].[hash][ext]',
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),

  ]
}
```

#### 3.1 Babel

[Babel](https://babeljs.io/) - это инструмент для транспиляции кода на JavaScript. Он позволяет разработчикам писать код, используя современные функции языка, которые могут быть не поддержаны всеми браузерами. Babel преобразует этот код в совместимый с более старыми версиями браузеров, обеспечивая кросс-браузерную поддержку и совместимость.

Настройки Babel:

```js
// babel.config.js
const presets = [
  ['@babel/preset-env', {
    targets: {
      edge: '17',
      ie: '11',
      firefox: '50',
      chrome: '64',
      safari: '11.1'
    },
    useBuiltIns: "entry"
  }]
];
module.exports = { presets };
```

#### 3.2 PostCSS

[PostCSS](https://postcss.org/) - это инструмент для обработки и трансформации кода CSS. Он позволяет разработчикам применять различные плагины к CSS коду, автоматизируя задачи, такие как автопрефиксинг, оптимизация, генерация переменных и многое другое. PostCSS гибкий и настраиваемый, что позволяет адаптировать его под конкретные потребности проекта.

Настройки PostCSS:

```js
// postcss.config.js
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
module.exports = {
  plugins: [
    autoprefixer,
    cssnano({ preset: 'default' })
  ]
};
```
