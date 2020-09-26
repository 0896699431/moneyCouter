function useFormatNumber(num) {
    let nums = '';
    typeof (num != 'String') ? nums = num.toString() : nums = num;
    let number = nums.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    let numberString = number.toString();
    return numberString;
}
export default useFormatNumber;