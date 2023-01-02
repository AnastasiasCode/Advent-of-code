const strin = 'gtZDjBcmpcDgpZcmmbgtdtqmCGVCGGsvhCFCCqvmCMMM'
const rucksacks = newInput.split('\n')

function findCommonFromHalves (rucksack){
    const firstHalf = rucksack.slice(0, rucksack.length/2);
    const secondHalf = rucksack.slice(rucksack.length/2);
    let commonItem = null;
    for (item of firstHalf){
        if (secondHalf.includes(item)){
            commonItem = item;
            break;
        }
    }
    return commonItem;
}
const SMALL_A_SCORE = 1;
const BIG_A_SCORE = 27; 
function getItemPriority(item){
    let codeOfItem = item.charCodeAt()
    if (codeOfItem >= "a".charCodeAt() && codeOfItem <= "z".charCodeAt()){
        return codeOfItem - ("a".charCodeAt() - SMALL_A_SCORE);
    }else if(codeOfItem >= "A".charCodeAt() && codeOfItem <= "Z".charCodeAt()){
        return codeOfItem - ("A".charCodeAt() - BIG_A_SCORE);
    }
    return null;
}
function findSumOfPriorities(rucksacks){
    let sumOfPriorities = 0;
    for (rucksack of rucksacks){
        let commonItem = findCommonFromHalves(rucksacks);
        let itemPriority = getItemPriority(commonItem);
        sumOfPriorities += itemPriority;
    } 
    return sumOfPriorities;
}

console.log(findSumOfPriorities(rucksacks))