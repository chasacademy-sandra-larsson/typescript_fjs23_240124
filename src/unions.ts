    // Unions  är endaast en pipe "|" mellan olika typer. I detta fall kan phoneNR vara antingen en string eller en number
    let phoneNr: string | number

    function callNumber(phoneNr: string | number): void {

            // Detta kalla för "typequard" eller "narrowing"
            if(typeof phoneNr === "string") {
                console.log(phoneNr.toUpperCase)
                return
            }
            console.log(phoneNr)

    }

    callNumber(123123123)


    // Ett annat exemple på unions

    type Circle = {
        kind: "circle",
        radius: number
    }
    type Square = {
        kind: "square",
        sideLength: number
    }
    type Shape = Circle | Square
    
    function calculateArea(shape: Shape): number {
      switch (shape.kind) {
        case "circle":
          return Math.PI * shape.radius ** 2;
        case "square":
          return shape.sideLength ** 2;
        default:
          throw new Error("Invalid shape");
      }
    }
    
    const circle: Shape = { kind: "circle", radius: 5 };
    const square: Shape = { kind: "square", sideLength: 4 };
    
    console.log("Circle area:", calculateArea(circle));
    console.log("Square area:", calculateArea(square));