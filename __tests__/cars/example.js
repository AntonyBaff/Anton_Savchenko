async function processSequentially() {
    let results = [];

    for (let i = 1; i <= 10; i++) {
        // Асинхронная операция выполняется и ждет завершения
        let result = await asyncOperation(i);
        results.push(result);
    }

    return results;
}

// Пример асинхронной функции
function asyncOperation(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Processing number: ${num}`);
            resolve(`Result: ${num}`);
        }, 1000); // Задержка 1 секунда
    });
}

// Запуск функции и обработка результатов
processSequentially().then((results) => {
    console.log('All results:', results);
});