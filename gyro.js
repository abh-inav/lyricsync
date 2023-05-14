let gyroscope = new Gyroscope({ frequency: 60 });

gyroscope.addEventListener("reading", function() {
    document.querySelector("#x").innerText = gyroscope.x;
    document.querySelector("#y").innerText = gyroscope.y;
    document.querySelector("#z").innerText = gyroscope.z;
    console.log(`Angular velocity along the X-axis ${gyroscope.x}`);
    console.log(`Angular velocity along the Y-axis ${gyroscope.y}`);
    console.log(`Angular velocity along the Z-axis ${gyroscope.z}`);
});

gyroscope.start();
