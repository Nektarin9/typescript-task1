interface TotalPrice{
    price: number,
    discount: number,
    isInstallment: boolean,
    months: number
}

const totalPrice = ({ price, discount, isInstallment, months } : TotalPrice): number => {
    if (discount > 0) {
        discount = discount / 100
    }
    const discountedPrice = price - price * discount;
    const result = isInstallment ? discountedPrice / months : discountedPrice;

    return result
};

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); // 6250

