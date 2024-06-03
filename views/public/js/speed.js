// Функция для форматирования и отображения времени загрузки
function displayPerformanceTimings() {
    // Проверяем наличие данных о производительности
    const performanceEntries = performance.getEntriesByType("navigation")[0];

    // Если данные о производительности отсутствуют, выводим соответствующее сообщение
    if (!performanceEntries) {
        console.log("Данные о производительности недоступны.");
        return;
    }
    // Определяем метрики
    const metrics = {
        "Время до первого байта (TTFB)": performanceEntries.responseStart,
        "DOM Interactive": performanceEntries.domInteractive,
        "DOM Content Loaded": performanceEntries.domContentLoadedEventEnd,
        "Загрузка страницы завершена": performanceEntries.loadEventEnd
    };

    // Выводим текст и метрики в консоль
    for (const [metric, time] of Object.entries(metrics)) {
        console.log(`${metric}: ${time.toFixed(2)} мс`);
    }
}

// Измеряем производительность, когда страница полностью загружена
window.addEventListener("load", displayPerformanceTimings);