class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let profit = 0;
        let buy = prices[0]
       for(let i = 0 ; i < prices.length ; i++){
        let num = prices[i]-buy;
        if(num>=profit){
            profit=num;
        }
      else{
        if(buy>prices[i]){

buy=prices[i]
        }
      }
       }
      return profit
    }
}
