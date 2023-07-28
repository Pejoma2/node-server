# ¿Qué sucedio al usar async y await?

Sólo usé la función asincrona en la función **addTask()** que es la encargada de crear cada Tarea. 
Tuve que crear 2 Promesas. La primera  promesa esperaba que el usuario ingresara los 3 datos que se le piden por consola, aqui uso el await, hasta que no tengamos los 3 datos no pasa a La segunda promesa que es donde se crea la Tarea. En la segunda tarea uso un setTimeout(), para simular una asincronia en la creación de la tarea. En resumen, al usar async y await, pude esperar a que el usuario ingresara el nombre, la descripcion y una fecha de entrega, para luego crear la tarea.



# ¿Qué sucedio al usar el método then()?

Realmente son metodos muy parecidos, desde mi punto de vista. La promesa y luego el metodo .then(), los usé en las funciones **removeTask()** y **completeTask()** que son funciones para eliminar una tarea, ingresando el ID de la tarea que queremos eliminar, y marcar la tarea como completada, también ingresando el ID de la tarea. Simulando una asincronia, con el setTimeout en ambas funciones, resuelvo la tarea dentro del resolve() y utilizo el .then() solo para hacer el console.log() mostrando que se ha realizado, sea el "Task Removed." o el "Task Completed".
En un ensayo aparte, probé de la siguiente manera:

if(taskIndex !== -1) {
            new Promise((resolve) =>{
            setTimeout(() => {
                resolve();
            }, 2000);
            })
            .then(() => {
                tasks.splice(taskIndex, 1)
                console.log("Task Removed.");
                showMenu();
              })
        }
        else{
            console.log("Can´t find the ID")
            showMenu();
        }

y funciona igual que como lo tengo en este momento.....no sabría decir cual es la diferencia entre tener 

tasks.splice(taskIndex, 1)

dentro del resolve().....o dentro del .then().....funcionalmente, parece ser lo mismo. Para este ejercicio no usé el método reject.



# ¿Qué diferencias encontraste entre async, await y el método then()?

En cuanto a funcionalidad, me pareció que era lo mismo. Yo diría que funcionalmente son lo mismo, solo que tienen una forma difrente de escribirlo. En un video, buscando información decian:

"...async/await es mas limpio de escribir..."
"...pero a veces es mas fácil concatenar el método .then()..."

creo que con mas experiencia podré tomar un concepto mas propio!