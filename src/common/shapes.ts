
export interface ContainerWall{
    rotation: number[],
    position: number[],
    dimensions: number[]
}

export interface Container {
    name: string,
    numberOfWalls: number,
    walls: ContainerWall[],
}

const squareSide: number[] = [8.5, 1, .5]
const triangleSide: number[] = [10, 1, .5]

const triangle: Container = {
    name: "triangle",
    numberOfWalls: 3,
    walls: [
        {
            rotation: [-Math.PI / 2, 0, 0],
            position:[0, -2.75, 0],
            dimensions: triangleSide
        },
        {
            rotation: [-Math.PI / 2, Math.PI / 3, 0],
            position:[2.5, 1.75, 0],
            dimensions: triangleSide
            
        },
        {
            rotation:[-Math.PI / 2, -Math.PI / 3, 0],
            position:[-2.5, 1.75, 0],
            dimensions: triangleSide
        },
    ]
}



const square: Container = {
    name: "square",
    numberOfWalls: 4,
    walls: [
        {
            rotation: [-Math.PI / 2, 0, 0],
            position:[0, 4, 0],
            dimensions: squareSide
        },
        {
            rotation: [-Math.PI / 2, Math.PI / 2, 0],
            position:[-4, 0, 0],
            dimensions: squareSide
        },
        {
            rotation: [-Math.PI / 2, -Math.PI / 2, 0],
            position:[4, 0, 0],
            dimensions: squareSide
        },
        {
            rotation:[-Math.PI / 2, 0, 0],
            position:[0, -4, 0],
            dimensions: squareSide
        }
    ]
}

const pentagon: Container = {
    name: "pentagon",
    numberOfWalls: 5,
    walls: [
        {
            rotation: [-Math.PI / 2, 0, 0],
            position:[0, -4, 0],
            dimensions: [6.5, 1, .5]
        },
        {
            rotation: [-Math.PI / 2, Math.PI / 1.66, 0],
            position:[4, -1.05, 0],
            dimensions: [6.5, 1, .5]
            
        },
        {
            rotation:[-Math.PI / 2, (Math.PI / 1.66) * 2, 0],
            position:[2.45, 3.75, 0],
            dimensions: [6.5, 1, .5]
        },
        {
            rotation:[-Math.PI / 2, -(Math.PI / 1.66) * 2, 0],
            position:[-2.45, 3.75, 0],
            dimensions: [6.5, 1, .5]
        },
        {
            rotation: [-Math.PI / 2, -Math.PI / 1.66, 0],
            position:[-4, -1.05, 0],
            dimensions: [6.5, 1, .5]
        },
    ]
}




export const Shapes: Container[] = [square, pentagon, triangle];

export default Container;