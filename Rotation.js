//Rotación de terreno
AFRAME.registerComponent("terrain-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 },
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
          if (this.data.speedOfRotation < 0.1) {
            this.data.speedOfRotation += 0.01;
          }
        }
        if (e.key === "ArrowLeft") {
          if (this.data.speedOfRotation > -0.1) {
            this.data.speedOfRotation -= 0.01;
          }
        }
      });
    },
    tick: function () {
      var mapRotation = this.el.getAttribute("rotation");
  
      mapRotation.y += this.data.speedOfRotation;
  
      this.el.setAttribute("rotation", {
        x: mapRotation.x,
        y: mapRotation.y,
        z: mapRotation.z,
      });
    },
  });
  
  //Componente de rotación del avión
  AFRAME.registerComponent("sled-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 },
      speedOfAscent: { type: "number", default: 0 }
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
  
        //obtener la información de los atributos
        this.data.speedOfRotation = this.el.getAttribute("rotation");      
        this.data.speedOfAscent = this.el.getAttribute("position");
  
        var sledRotation = this.data.speedOfRotation;      
        var sledPosition = this.data.speedOfAscent;
  
        //controlar los atributos con las flechas del teclado
        if (e.key === "ArrowRight") {
          if (sladeRotation.x > -10) {
            sledRotation.x -= 0.5;
            this.el.setAttribute("rotation", sledRotation);
          }
        }
        if (e.key === "ArrowLeft") {
          if (sledRotation.x < 10) {
            sledRotation.x += 0.5;
            this.el.setAttribute("rotation", sledRotation);
          }
        }
        if (e.key === "ArrowUp") {
          if (sledRotation.z > -10) {
            sledRotation.z -= 0.5;
            this.el.setAttribute("rotation", sledRotation);
          }
          if (sledPosition.y < 2) {
            sledPosition.y += 0.01;
            this.el.setAttribute("position", sledPosition);
          }
        }
        if (e.key === "ArrowDown") {
          if (sledRotation.z < 20) {
            sledRotation.z += 0.5;
            this.el.setAttribute("rotation", sledRotation);
          }
          if (sledPosition.y > -15) {
            sledPosition.y -= 0.01;
            this.el.setAttribute("position", sledPosition);
          }
        }
      });
    }
  });
  
  
