/*En el cÃ³digo siguiente.
 en robot hay un mÃ©todo getter, numOfSensors, pero no un 
 mÃ©todo setter. 

 Â¿QuÃ© pasa si necesitamos agregar o eliminar sensores? 
 Solucionemos ese problema.*/

const robot = {
  _model: "1E78V2",
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors() {
    if (typeof this._numOfSensors === "number") {
      return this._numOfSensors;
    } else {
      return "Sensors are currently down.";
    }
  },

  set numOfSensors(num) {
    if (typeof num === "number" && num >= 0) {
      this._numOfSensors = num;
    } else {
      console.log("Pass in a number that is greater than or equal to 0");
    }
  },
};

/*Paso 1:
Agregue un mÃ©todo setter llamado numOfSensors con la palabra
clave set . Proporcione un parÃ¡metro de num. 
Deje el cuerpo de la funciÃ³n vacÃ­o por ahora. 

*Paso 2
Hay un par de cosas que debemos hacer en el mÃ©todo setter:

Agregue una verificaciÃ³n para ver si num es un nÃºmero 
usando el operador typeof.
num tambiÃ©n debe ser mayor o igual a 0.
Si se cumplen ambas condiciones, reasignar 
this._numOfSensorsa num.

Paso 3:
Ahora agregue un registro else que registre 
'Pass in a number that is greater than or equal to 0'
en la consola.

Paso 4:
Utilice el mÃ©todo setter numOfSensors  para asignar 
robot _numOfSensors a 100.

*/
robot.numOfSensors = 100;
/*

Paso 5:
Para comprobar que el mÃ©todo setter funcionÃ³, 
registre en console.log() robot.numOfSensors.
*/

console.log(robot.numOfSensors);
