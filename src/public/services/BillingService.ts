import axios from 'axios'

import { BillingInfoDto, BillingQueryDto } from '../../types/api/billing'

// Exported for testing
export const BILLING_ENDPOINT = '/billing'

/**
 * Gets the billing information for the given month and year
 * @param billingQueryParams The formId and the specific month to get the information for
 * @returns Promise<BillingResult> The billing statistics of the given month
 */
export const getBillingInfo = (
  billingQueryParams: BillingQueryDto,
): Promise<BillingInfoDto> => {
  return axios
    .get<BillingInfoDto>(BILLING_ENDPOINT, {
      params: billingQueryParams,
    })
    .then(({ data }) => data)
}
