const puppeteer = require('puppeteer');

test('Получение заголовка страницы', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Открываем страницу
    await page.goto('http://localhost:5173/views/index.html#top');
    const title = await page.title();
    expect(title).toBe('Сайт музыкального исполнителя');

    await browser.close();
});

test('Проверка перехода по якорной ссылке', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    // Открываем страницу
    await page.goto('http://localhost:5173/views/index.html#portfolio');
  
    // Находим ссылку с якорем и кликаем по ней
    await Promise.all([
      page.waitForNavigation(), // Ожидаем перехода
      page.click('a[href="#portfolio"]'), // Нажимаем на ссылку с якорем
    ]);
  
    // Проверяем, что страница прокрутилась к элементу с id="section2"
    const section2Title = await page.$eval('#portfolio', el => el.textContent.trim().split('\n')[0]);
    expect(section2Title).toBe('Прослушивайте самые последние релизы прямо сейчас!'); // Предполагаемый заголовок раздела
  
    await browser.close();
});

test('Открытие модального окна', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    await page.goto('http://localhost:5173/views/index.html');
  
    // Нажимаем на кнопку, открывающую модальное окно
    await page.click('.portfolio-link');
  
    // Проверяем, что модальное окно отображается в DOM
    const modal = await page.$('#portfolioModal1');
    expect(modal).not.toBeNull();
  
    await browser.close();
});
