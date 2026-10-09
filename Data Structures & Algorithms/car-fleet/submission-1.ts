class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        let fleet = 0 ;
         let stack = [];
         let cars=[]
        for (let i= 0 ;i <position.length;i++){
            cars[i]=[position[i],speed[i]]
        }
        cars.sort(([a],[b])=>b-a);
        for(let i = 0 ;i < cars.length ; i++){
            let time = (target-cars[i][0])/cars[i][1]

            if(stack.length==0){
                stack.push(time);
                fleet++;
                continue;
            }
            if(time > stack[stack.length-1]){
                fleet++;
                stack.push(time)
            }

        }
        return fleet
    }
}
