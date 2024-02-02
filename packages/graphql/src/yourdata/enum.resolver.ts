import {
    CountryCode,
    CurrencyCode,
    ExpensesClassificationCategoryEnumType,
    ExpensesClassificationEnumType,
    InvoiceDetailEnumType,
    InvoiceEnumType,
    MeasurementUnitEnumType,
    PaymentMethodEnumType,
    RecEnumType,
    StampDutyPercentCategoryEnumType,
    VatCategoryEnumType,
    VatExemptionCategoryEnumType
} from "@yourdata/sdk/dist/types";

export const enumResolvers = {
    CountryCodeEnumType: CountryCode,
    CurrencyCodeEnumType: CurrencyCode,
    InvoiceDetailEnumType,
    InvoiceEnumType,
    ExpensesClassificationCategoryEnumType,
    ExpensesClassificationEnumType,
    PaymentMethodEnumType,
    MeasurementUnitEnumType,
    RecEnumType,
    StampDutyPercentCategoryEnumType,
    VatCategoryEnumType,
    VatExemptionCategoryEnumType,
}