export const IDGenerator = createIDGenerator();

function* createIDGenerator () {
    let ID = 0;
    while(true){
        yield ID++;
    }
}