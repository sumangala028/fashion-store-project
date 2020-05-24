
export const validateDiscount = (price, discount) => {
  if (!price || !discount) {
    return false
  }
  console.log(discount, price, discount > price)
  try {
    if (parseInt(discount) > parseInt(price)) {
      return false
    }
  } catch {
    return false
  }
  return true
}