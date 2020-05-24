
import { validateDiscount } from '../utils/validations';

it('ValidateDiscount should return false if price and discount are null', () => {
  const response = validateDiscount("", "")
  expect(response).toBe(false);
});

it('ValidateDiscount should return false if price is  null', () => {
  const response = validateDiscount("", 100)
  expect(response).toBe(false);
});

it('ValidateDiscount should return false if discount is null', () => {
  const response = validateDiscount(100, "")
  expect(response).toBe(false);
});

it('ValidateDiscount should return true if price is greater than discount', () => {
  const response = validateDiscount(100, 10)
  expect(response).toBe(true);
});

it('ValidateDiscount should return true if price is equal to discount', () => {
  const response = validateDiscount(100, 100)
  expect(response).toBe(true);
});

it('ValidateDiscount should return false if price is less to discount', () => {
  const response = validateDiscount(100, 101)
  expect(response).toBe(false);
});