
export enum InvoiceEnumType {
    /**
     * Τιμολόγιο Πώλησης
     */
    InvoiceSales_1_1 = "1.1",
    /**
     * Τιμολόγιο Πώλησης / Ενδοκοινοτικές Παραδόσεις
     */
    InvoiceSalesIntraCommunityDeliveries_1_2 = "1.2",
    /**
     * Τιμολόγιο Πώλησης / Παραδόσεις Τρίτων Χωρών
     */
    InvoiceSalesThirdCountryDeliveries_1_3 = "1.3",
    /**
     * Τιμολόγιο Πώλησης / Πώληση για Λογαριασμό Τρίτων
     */
    InvoiceSalesThirdPartyAccount_1_4 = "1.4",
    /**
     * Τιμολόγιο Πώλησης / Εκκαθάριση Πωλήσεων Τρίτων - Αμοιβή από Πωλήσεις Τρίτων
     */
    InvoiceSalesThirdPartySettlement_1_5 = "1.5",
    /**
     * Τιμολόγιο Πώλησης / Συμπληρωματικό Παραστατικό
     */
    InvoiceSalesSupplementaryDocument_1_6 = "1.6",
    /**
     * Τιμολόγιο Παροχής
     */
    InvoiceSupply_2_1 = "2.1",
    /**
     * Τιμολόγιο Παροχής / Ενδοκοινοτική Παροχή Υπηρεσιών
     */
    InvoiceSupplyIntraCommunityServices_2_2 = "2.2",
    /**
     * Τιμολόγιο Παροχής / Παροχή Υπηρεσιών σε λήπτη Τρίτης Χώρας
     */
    InvoiceSupplyThirdCountryServices_2_3 = "2.3",
    /**
     * Τιμολόγιο Παροχής / Συμπληρωματικό Παραστατικό
     */
    InvoiceSupplySupplementaryDocument_2_4 = "2.4",
    /**
     * Τίτλος Κτήσης (μη υπόχρεος Εκδότης)
     */
    PropertyTitleNonObligatedIssuer_3_1 = "3.1",
    /**
     * Τίτλος Κτήσης (άρνηση έκδοσης από υπόχρεο Εκδότη)
     */
    PropertyTitleIssuerDenial_3_2 = "3.2",
    /**
     * Πιστωτικό Τιμολόγιο / Συσχετιζόμενο
     */
    CreditInvoiceRelated_5_1 = "5.1",
    /**
     * Πιστωτικό Τιμολόγιο / Μη Συσχετιζόμενο
     */
    CreditInvoiceUnrelated_5_2 = "5.2",
    /**
     * Στοιχείο Αυτοπαράδοσης
     */
    SelfDeliveryItem_6_1 = "6.1",
    /**
     * Στοιχείο Ιδιοχρησιμοποίησης
     */
    SelfUseItem_6_2 = "6.2",
    /**
     * Συμβόλαιο - Έσοδο
     */
    ContractIncome_7_1 = "7.1",
    /**
     * Ενοίκια - Έσοδο
     */
    RentIncome_8_1 = "8.1",
    /**
     * Ειδικό Στοιχείο – Απόδειξης Είσπραξης Φόρου Διαμονής
     */
    SpecialItemResidenceTaxReceipt_8_2 = "8.2",
    /**
     * Απόδειξη Είσπραξης POS
     */
    POSReceipt_8_4 = "8.4",
    /**
     * Απόδειξη Επιστροφής POS
     */
    POSRefundReceipt_8_5 = "8.5",
    /**
     * Δελτίο Παραγγελίας Εστίασης
     */
    CateringOrder_8_6 = "8.6",
    /**
     * Παραστατικό Διακίνησης Μη Συσχετιζόμενο
     */
    NonRelatedMovementDocument_9_3 = "9.3",
    /**
     * ΑΛΠ
     */
    ALP_11_1 = "11.1",
    /**
     * ΑΠΥ
     */
    APY_11_2 = "11.2",
    /**
     * Απλοποιημένο Τιμολόγιο
     */
    SimplifiedInvoice_11_3 = "11.3",
    /**
     * Πιστωτικό Στοιχ. Λιανικής
     */
    RetailCreditNote_11_4 = "11.4",
    /**
     * Απόδειξη Λιανικής Πώλησης για Λογ/σμό Τρίτων
     */
    RetailSalesReceiptForThirdPartyAccount_11_5 = "11.5",
    /**
     * Έξοδα - Αγορές Λιανικών Συναλλαγών ημεδαπής / αλλοδαπής
     */
    RetailPurchasesExpensesDomesticForeign_13_1 = "13.1",
    /**
     * Παροχή Λιανικών Συναλλαγών ημεδαπής / αλλοδαπής
     */
    RetailSalesProvisionDomesticForeign_13_2 = "13.2",
    /**
     * Κοινόχρηστα
     */
    CommonExpenses_13_3 = "13.3",
    /**
     * Συνδρομές
     */
    Subscriptions_13_4 = "13.4",
    /**
     * Παραστατικά Οντότητας ως Αναγράφονται από την ίδια (Δυναμικό)
     */
    EntityDocumentsSameIssuerDynamic_13_30 = "13.30",
    /**
     * Πιστωτικό Στοιχ. Λιανικής ημεδαπής / αλλοδαπής
     */
    RetailCreditNoteDomesticForeign_13_31 = "13.31",
    /**
     * Τιμολόγιο / Ενδοκοινοτικές Αποκτήσεις
     */
    InvoiceIntraCommunityAcquisitions_14_1 = "14.1",
    /**
     * Τιμολόγιο / Αποκτήσεις Τρίτων Χωρών
     */
    InvoiceThirdCountryAcquisitions_14_2 = "14.2",
    /**
     * Τιμολόγιο / Ενδοκοινοτική Λήψη Υπηρεσιών
     */
    InvoiceIntraCommunityServicesReceipt_14_3 = "14.3",
    /**
     * Τιμολόγιο / Λήψη Υπηρεσιών Τρίτων Χωρών
     */
    InvoiceThirdCountryServicesReceipt_14_4 = "14.4",
    /**
     * ΕΦΚΑ και λοιποί Ασφαλιστικοί Οργανισμοί
     */
    EFKAAndOtherInsuranceOrganizations_14_5 = "14.5",
    /**
     * Παραστατικά Οντότητας ως Αναγράφονται από την ίδια (Δυναμικό)
     */
    EntityDocumentsSameIssuerDynamic2_14_30 = "14.30",
    /**
     * Πιστωτικό ημεδαπής / αλλοδαπής
     */
    DomesticForeignCredit_14_31 = "14.31",
    /**
     * Συμβόλαιο - Έξοδο
     */
    ContractOutcome_15_1 = "15.1",
    /**
     * Ενοίκιο Έξοδο
     */
    RentOutcome_16_1 = "16.1",
    /**
     * Μισθοδοσία
     */
    Salary_17_1 = "17.1",
    /**
     * Αποσβέσεις
     */
    Depreciation_17_2 = "17.2",
    /**
     * Λοιπές Εγγραφές Τακτοποίησης Εσόδων - Λογιστική Βάση
     */
    OtherIncomeAdjustmentEntriesAccountingBasis_17_3 = "17.3",
    /**
     * Λοιπές Εγγραφές Τακτοποίησης Εσόδων - Φορολογική Βάση
     */
    OtherIncomeAdjustmentEntriesTaxBasis_17_4 = "17.4",
    /**
     * Λοιπές Εγγραφές Τακτοποίησης Εξόδων - Λογιστική Βάση
     */
    OtherExpensesAdjustmentEntriesAccountingBasis_17_5 = "17.5",
    /**
     * Λοιπές Εγγραφές Τακτοποίησης Εξόδων - Φορολογική Βάση
     */
    OtherExpensesAdjustmentEntriesTaxBasis_17_6 = "17.6"
}

export enum VatCategoryEnumType {
    /**
     * ΦΠΑ Συντελεστής 24%
     * VAT Rate 24%
     */
    Vat24Percent = "1",

    /**
     * ΦΠΑ Συντελεστής 13%
     * VAT Rate 13%
     */
    Vat13Percent = "2",

    /**
     * ΦΠΑ Συντελεστής 6%
     * VAT Rate 6%
     */
    Vat6Percent = "3",

    /**
     * ΦΠΑ Συντελεστής 17%
     * VAT Rate 17%
     */
    Vat17Percent = "4",

    /**
     * ΦΠΑ Συντελεστής 9%
     * VAT Rate 9%
     */
    Vat9Percent = "5",

    /**
     * ΦΠΑ Συντελεστής 4%
     * VAT Rate 4%
     */
    Vat4Percent = "6",

    /**
     * Άνευ Φ.Π.Α. 0%
     * VAT Exempt 0%
     */
    VatExempt = "7",

    /**
     * Εγγραφές χωρίς ΦΠΑ
     * Registrations without VAT
     */
    VatWithoutRegistration = "8",

    /**
     * ΦΠΑ Συντελεστής 3% (Άρθρο 396)
     * VAT Rate 3% (Article 396)
     */
    Vat396Percent = "9",
}

export enum VatExemptionCategoryEnumType {
    /**
     * Χωρίς ΦΠΑ — Άρθρο 2 και 3 του Κώδικα ΦΠΑ
     * Without VAT — Article 2 and 3 of the VAT Code
     */
    WithoutvatArticle2and3 = "1",

    /**
     * Χωρίς ΦΠΑ - Άρθρο 5 του Κώδικα ΦΠΑ
     * Without VAT — Article 5 of the VAT Code
     */
    WithoutvatArticle5 = "2",

    /**
     * Χωρίς ΦΠΑ - Άρθρο 13 του Κώδικα ΦΠΑ
     * Without VAT — Article 13 of the VAT Code
     */
    WithoutvatArticle13 = "3",

    /**
     * Χωρίς ΦΠΑ - Άρθρο 14 του Κώδικα ΦΠΑ
     * Without VAT — Article 14 of the VAT Code
     */
    WithoutvatArticle14 = "4",

    /**
     * Χωρίς ΦΠΑ - Άρθρο 16 του Κώδικα ΦΠΑ
     * Without VAT — Article 16 of the VAT Code
     */
    WithoutvatArticle16 = "5",

    /**
     * Χωρίς ΦΠΑ - Άρθρο 19 του Κώδικα ΦΠΑ
     * Without VAT — Article 19 of the VAT Code
     */
    WithoutvatArticle19 = "6",

    /**
     * Χωρίς ΦΠΑ - Άρθρο 22 του Κώδικα ΦΠΑ
     * Without VAT — Article 22 of the VAT Code
     */
    WithoutvatArticle22 = "7",

    /**
     * Χωρίς ΦΠΑ - Άρθρο 24 του Κώδικα ΦΠΑ
     * Without VAT — Article 24 of the VAT Code
     */
    WithoutvatArticle24 = "8",

    /**
     * Χωρίς ΦΠΑ - Άρθρο 25 του Κώδικα ΦΠΑ
     * Without VAT — Article 25 of the VAT Code
     */
    WithoutvatArticle25 = "9",

    /**
     * Χωρίς ΦΠΑ - Άρθρο 26 του Κώδικα ΦΠΑ
     * Without VAT — Article 26 of the VAT Code
     */
    WithoutvatArticle26 = "10",

    /**
     * Χωρίς ΦΠΑ - Άρθρο 27 του Κώδικα ΦΠΑ
     * Without VAT — Article 27 of the VAT Code
     */
    WithoutvatArticle27 = "11",

    /**
     * Χωρίς ΦΠΑ - Άρθρο 27 - Πλοία Ανοικτής Θαλάσσης του Κώδικα
     * Without VAT — Article 27 - Open Sea Ships of the VAT Code
     */
    WithoutvatArticle27Openseaships = "12",

    /**
     * Χωρίς ΦΠΑ - Άρθρο 27.1 - Πλοία Ανοικτής Θαλάσσης του Κώδικα ΦΠΑ
     * Without VAT — Article 27.1 - Open Sea Ships of the VAT Code
     */
    WithoutvatArticle271Openseaships = "13",

    /**
     * Χωρίς ΦΠΑ - Άρθρο 28 του Κώδικα ΦΠΑ
     * Without VAT — Article 28 of the VAT Code
     */
    WithoutvatArticle28 = "14",

    /**
     * Χωρίς ΦΠΑ - Άρθρο 39 του Κώδικα ΦΠΑ
     * Without VAT — Article 39 of the VAT Code
     */
    WithoutvatArticle39 = "15",

    /**
     * ΠΑ Χωρίς ΦΠΑ - Άρθρο 39α του Κώδικα
     * Partially Exempt without VAT — Article 39a of the VAT Code
     */
    PaWithoutvatArticle39a = "16",

    /**
     * Χωρίς ΦΠΑ - Άρθρο 40 του Κώδικα
     * Without VAT — Article 40 of the VAT Code
     */
    WithoutvatArticle40 = "17",

    /**
     * Χωρίς ΦΠΑ - Άρθρο 41 του Κώδικα
     * Without VAT — Article 41 of the VAT Code
     */
    WithoutvatArticle41 = "18",

    /**
     * Χωρίς ΦΠΑ - Άρθρο 47 του Κώδικα
     * Without VAT — Article 47 of the VAT Code
     */
    WithoutvatArticle47 = "19",

    /**
     * ΠΑ Εμπεριεχόμενος - Άρθρο 43 του Κώδικα ΦΠΑ
     * Fully Exempt with VAT Included — Article 43 of the VAT Code
     */
    PaIncludedArticle43 = "20",

    /**
     * MA Εμπεριεχόμενος - Άρθρο 44 του Κώδικα ΦΠΑ
     * Mostly Exempt with VAT Included — Article 44 of the VAT Code
     */
    MaIncludedArticle44 = "21",

    /**
     * ΠΑ Εμπεριεχόμενος - Άρθρο 45 του Κώδικα ΦΠΑ
     * Fully Exempt with VAT Included — Article 45 of the VAT Code
     */
    PaIncludedArticle45 = "22",

    /**
     * MA Εμπεριεχόμενος - Άρθρο 46 του Κώδικα ΦΠΑ
     * Mostly Exempt with VAT Included — Article 46 of the VAT Code
     */
    MaIncludedArticle46 = "23",

    /**
     * Χωρίς ΦΠΑ - Άρθρο 6 του Κώδικα ΦΠΑ
     * Without VAT — Article 6 of the VAT Code
     */
    WithoutvatArticle6 = "24",

    /**
     * Χωρίς ΦΠΑ - ΠΟΛ.1029/1995
     * Without VAT — Law 1029/1995
     */
    WithoutvatPol10291995 = "25",

    /**
     * Χωρίς ΦΠΑ - ΠΟΛ.1167/2015
     * Without VAT — Law 1167/2015
     */
    WithoutvatPol11672015 = "26",

    /**
     * Λοιπές Εξαιρέσεις ΦΠΑ
     * Other VAT Exemptions
     */
    OtherVatExemptions = "27",

    /**
     * Χωρίς ΦΠΑ – Άρθρο 24 περ. β' παρ. 1 του Κώδικα ΦΠΑ, (Tax Free)
     * Without VAT — Article 24, paragraph 1 of the VAT Code (Tax Free)
     */
    WithoutvatArticle24Paragraph1Taxfree = "28",

    /**
     * Χωρίς ΦΠΑ – Άρθρο 47β, του Κώδικα ΦΠΑ (OSS μη ενωσιακό καθεστώς)
     * Without VAT — Article 47β of the VAT Code (OSS non-union scheme)
     */
    WithoutvatArticle47bOssNonunion = "29",

    /**
     * Χωρίς ΦΠΑ – Άρθρο 47γ, του Κώδικα ΦΠΑ (OSS ενωσιακό καθεστώς)
     * Without VAT — Article 47γ of the VAT Code (OSS union scheme)
     */
    WithoutvatArticle47gOssUnion = "30",

    /**
     * Χωρίς ΦΠΑ – Άρθρο 47δ του Κώδικα ΦΠΑ (IOSS)
     * Without VAT — Article 47δ of the VAT Code (IOSS)
     */
    WithoutvatArticle47dIoss = "31"
}

export enum OtherTaxesPercentCategoryEnumType {
    /**
     * Περιπτ. Β' - Τόκοι - 1596
     * Interest - 1596
     */
    Interest1596 = "1",

    /**
     * Περιπτ. Γ' - Δικαιώματα - 20%
     * Rights - 20%
     */
    Rights20Percent = "2",

    /**
     * Περιπτ. Δ' - Αμοιβές Συμβουλών Διοίκησης - 20%
     * Administration Consultants' Fees - 20%
     */
    AdministrationConsultantsFees20Percent = "3",

    /**
     * Περιπτ. Δ' - Τεχνικά Έργα - 3%
     * Technical Works - 3%
     */
    TechnicalWorks3Percent = "4",

    /**
     * Υγρά καύσιμα και προϊόντα καπνοβιομηχανίας 1%
     * Liquid Fuels and Tobacco Products - 1%
     */
    LiquidFuelsAndTobaccoProducts1Percent = "5",

    /**
     * Λοιπά Αγαθά - 496
     * Other Goods - 496
     */
    OtherGoods496 = "6",

    /**
     * Παροχή Υπηρεσιών - 896
     * Services Provision - 896
     */
    ServicesProvision896 = "7",

    /**
     * Προκαταβλητέος Φόρος Αρχιτεκτόνων και Μηχανικών επί Συμβατικών Αμοιβών, για Εκπόνηση Μελετών και Σχεδίων - 496
     * Prepaid Tax for Architects and Engineers on Contractual Fees for Designing Studies and Plans - 496
     */
    PrepaidTaxArchitectsEngineersStudiesPlans496 = "8",

    /**
     * Προκαταβλητέος Φόρος Αρχιτεκτόνων και Μηχανικών επί Συμβατικών Αμοιβών, που αφορούν οποιασδήποτε άλλης φύσης έργα - 1096
     * Prepaid Tax for Architects and Engineers on Contractual Fees for Other Types of Works - 1096
     */
    PrepaidTaxArchitectsEngineersOtherWorks1096 = "9",

    /**
     * Προκαταβλητέος Φόρος στις Αμοιβές Δικηγόρων - 15%
     * Prepaid Tax on Lawyers' Fees - 15%
     */
    PrepaidTaxOnLawyersFees15Percent = "10",

    /**
     * Παρακράτηση Φόρου Μισθωτών Υπηρεσιών παρ. 1 αρ. 15 v. 4172/2013
     * Withholding Tax on Employed Services - Paragraph 1 Article 15 Law 4172/2013
     */
    WithholdingTaxEmployedServicesParagraph1Article15Law41722013 = "11",

    /**
     * Παρακράτηση Φόρου Μισθωτών Υπηρεσιών παρ. 2 αρ. 15 v. 4172/2013 - Αξιωματικών Εμπορικού Ναυτικού
     * Withholding Tax on Employed Services - Paragraph 2 Article 15 Law 4172/2013 - Merchant Navy Officers
     */
    WithholdingTaxEmployedServicesParagraph2Article15Law41722013MerchantNavyOfficers = "12",

    /**
     * Παρακράτηση Φόρου Μισθωτών Υπηρεσιών παρ. 2 αρ. 15 ν. 4172/2013 - Κατώτερο Πλήρωμα Εμπορικού Ναυτικού
     * Withholding Tax on Employed Services - Paragraph 2 Article 15 Law 4172/2013 - Merchant Navy Crew
     */
    WithholdingTaxEmployedServicesParagraph2Article15Law41722013MerchantNavyCrew = "13",

    /**
     * Παρακράτηση Ειδικής Εισφοράς Αλληλεγγύης
     * Withholding Special Solidarity Contribution
     */
    WithholdingSpecialSolidarityContribution = "14",

    /**
     * Παρακράτηση Φόρου Αποζημίωσης λόγω Διακοπής Σχέσης Εργασίας παρ. 3 αρ. 15v. 4172/2013
     * Withholding Tax for Compensation due to Termination of Employment Relationship - Paragraph 3 Article 15 Law 4172/2013
     */
    WithholdingTaxCompensationForTerminationOfWorkRelationParagraph3Article15Law41722013 = "15",

    /**
     * Παρακρατήσεις συναλλαγών αλλοδαπής βάσει συμβάσεων αποφυγής διπλής φορολογίας (Σ.Α.Δ.Φ.)
     * Withholdings on Foreign Transactions under Double Taxation Treaties (DTTs)
     */
    WithholdingsForeignTransactionsDoubleTaxationTreaties = "16",

    /**
     * Λοιπές Παρακρατήσεις Φόρου
     * Other Tax Withholdings
     */
    OtherTaxWithholdings = "17",

    /**
     * Παρακράτηση Φόρου Μερίσματα περ.α παρ. 1 αρ. 64 v. 4172/2013
     * Withholding Tax on Dividends - Paragraph 1 Article 64 Law 4172/2013
     */
    WithholdingTaxDividendsParagraph1Article64Law41722013 = "18"
}

export enum StampDutyPercentCategoryEnumType {
    /**
     * Συντελεστής 1,2 % για τέλη συμβάσεων
     * 1.2% Coefficient for Contract Fees
     */
    Coefficient_1_2_Percent = "1",

    /**
     * Συντελεστής 2,4 % για τέλη συμβάσεων
     * 2.4% Coefficient for Contract Fees
     */
    Coefficient_2_4_Percent = "2",

    /**
     * Συντελεστής 3,6 % για τέλη συμβάσεων
     * 3.6% Coefficient for Contract Fees
     */
    Coefficient_3_6_Percent = "3",

    /**
     * Λοιπές περιπτώσεις Χαρτοσήμου
     * Other Stamp Duty Cases
     */
    OtherStampDutyCases = "4"
}

export enum FeesPercentCategoryEnumType {
    /**
     * 12% για μηνιαίο λογαριασμό μέχρι €50
     * 12% for monthly bills up to €50
     */
    MonthlyBillUpTo50 = "1",

    /**
     * 15% για μηνιαίο λογαριασμό από €50,01 μέχρι και €100
     * 15% for monthly bills from €50.01 to €100
     */
    MonthlyBillFrom50To100 = "2",

    /**
     * 18% για μηνιαίο λογαριασμό από €100,01 μέχρι και €150
     * 18% for monthly bills from €100.01 to €150
     */
    MonthlyBillFrom100To150 = "3",

    /**
     * 20% για μηνιαίο λογαριασμό άνω των €150
     * 20% for monthly bills over €150
     */
    MonthlyBillOver150 = "4",

    /**
     * 12% Τέλος καρτοκινητής επί της αξίας του χρόνου ομιλίας
     * 12% Mobile prepaid charge on call time value
     */
    MobilePrepaidCharge = "5",

    /**
     * 10% Τέλος στη συνδρομητική τηλεόραση
     * 10% Subscription TV charge
     */
    SubscriptionTVCharge = "6",

    /**
     * 5% Τέλος συνδρομητών σταθερής τηλεφωνίας
     * 5% Fixed-line subscribers charge
     */
    FixedLineSubscribersCharge = "7",

    /**
     * Περιβαλλοντικό Τέλος & πλαστικής σακούλας ν. 2339/2001 αρ. 6α €0,07 ανά τεμάχιο
     * Environmental charge for plastic bags (Law 2339/2001 Article 6a) €0.07 per piece
     */
    EnvironmentalChargeForPlasticBags = "8",

    /**
     * 2% Εισφορά δακοκτονίας
     * 2% Olive fly contribution
     */
    OliveFlyContribution = "9",

    /**
     * Λοιπά τέλη
     * Other fees
     */
    OtherFees = "10",

    /**
     * Τέλη Λοιπών Φόρων
     * Other tax fees
     */
    OtherTaxFees = "11",

    /**
     * Εισφορά δακσκτονίας
     * Olive fly contribution
     */
    OliveFlyContribution2 = "12",

    /**
     * 10% για μηνιαίο λογαριασμό κάθε σύνδεσης
     * 10% for monthly bills for every connection
     */
    MonthlyBillForEveryConnection = "13",

    /**
     * 10% Τέλος καρτοκινητής επί της αξίας του χρόνου ομιλίας
     * 10% Mobile prepaid charge on call time value
     */
    MobilePrepaidCharge10 = "14",

    /**
     * 0% Τέλος κινητής και καρτοκινητής για φυσικά πρόσωπα ηλικίας 15 έως και 29 ετών
     * 0% Mobile and prepaid charge for youth aged 15 to 29
     */
    MobileAndPrepaidChargeForYouth = "15",

    /**
     * Εισφορά προστασίας περιβάλλοντος πλαστικών προϊόντων €0,04 ανά τεμάχιο [άρθρο 4 ν. 4736/2020]
     * Environmental protection plastic product fee (Law 4736/2020 Article 4) €0.04 per piece
     */
    EnvironmentalProtectionPlasticProductFee = "16",

    /**
     * Τέλος ανακύκλωσης €0,08 ανά τεμάχιο [άρθρα 80 ν. 4819/2021]
     * Recycling fee (Law 4819/2021 Article 80) €0.08 per piece
     */
    RecyclingFee = "17",

    /**
     * Τέλος διαμονής παρεπιδημσύντων
     * Accommodation charge for visitors
     */
    AccommodationChargeForVisitors = "18",

    /**
     * Τέλος επί των ακαθάριστων εσόδων των εστιατορίων και συναφών καταστημάτων
     * Restaurant gross revenue charge
     */
    RestaurantGrossRevenueCharge = "19",

    /**
     * Τέλος επί των ακαθάριστων εσόδων των κέντρων διασκέδασης
     * Entertainment centers gross revenue charge
     */
    EntertainmentCentersGrossRevenueCharge = "20",

    /**
     * Τέλος επί των ακαθάριστων εσόδων των καζίνο
     * Casino gross revenue charge
     */
    CasinoGrossRevenueCharge = "21",

    /**
     * Λοιπά τέλη επί των ακαθάριστων εσόδων
     * Other gross revenue charges
     */
    OtherGrossRevenueCharges = "22",
}

export enum IncomeClassificationCategoryEnumType {
    /**
     * Έσοδα από Πώληση Εμπορευμάτων (+) / (-)
     * Revenues from Sale of Goods
     */
    RevenuesFromSaleOfGoods = "category1_1",

    /**
     * Έσοδα από πώληση προϊόντων (+) / (-)
     * Revenues from Product Sales
     */
    RevenuesFromProductSales = "category1_2",

    /**
     * Έσοδα από Παροχή Υπηρεσιών (+) / (-)
     * Revenues from Provision of Services
     */
    RevenuesFromServices = "category1_3",

    /**
     * Έσοδα από Πώληση Παγίων (+) / (-)
     * Revenues from Sale of Fixed Assets
     */
    RevenuesFromSaleOfFixedAssets = "category1_4",

    /**
     * Λοιπά Έσοδα! Κέρδη (+)/(-)
     * Other Revenue and Profits
     */
    OtherRevenueAndProfits = "category1_5",

    /**
     * Αυτοπαραδόσεις / Ιδιοχρησιμοποιήσεις (+) / (-)
     * Self-Supply / Personal Use
     */
    SelfSupplyPersonalUse = "category1_6",

    /**
     * Έσοδα για λ/σμο τρίτων (+) / (-)
     * Revenue for Third Party Settlement
     */
    RevenueForThirdPartySettlement = "category1_7",

    /**
     * Έσοδα προηγούμενων χρήσεων (+)/ (-)
     * Revenue from Previous Years
     */
    RevenueFromPreviousYears = "category1_8",

    /**
     * Έσοδα επομένων χρήσεων (+) / (-)
     * Revenue from Subsequent Years
     */
    RevenueFromSubsequentYears = "category1_9",

    /**
     * Λοιπές Εγγραφές Τακτοποίησης Εσόδων (+) / (-)
     * Other Revenue Adjustment Entries
     */
    OtherRevenueAdjustmentEntries = "category1_10",

    /**
     * Λοιπά Πληροφοριακά Στοιχεία Εσόδων (+)/(-)
     * Other Informative Revenue Elements
     */
    OtherInformativeRevenueElements = "category1_95",

    /**
     * Διακίνηση
     * Distribution
     */
    Distribution = "category3"
}

export enum IncomeClassificationEnumType {
    /**
     * Ιδισπαραγωγή παγίων- Αυτοπαραδόσεις- Καταστροφές αποθεμάτων/Εμπορεύματα
     * Self-Production of Fixed Assets - Self-Deliveries - Destruction of Inventory/Goods
     */
    SelfProductionOfFixedAssetsDestructionOfGoods = "E3_106",

    /**
     * Ιδιοπαραγωγή παγίων - Αυτοπαραδόσεις - Καταστροφές αποθεμάτων/πρώτες ύλες και λοιπά υλικά
     * Self-Production of Fixed Assets - Self-Deliveries - Destruction of Inventory/Raw Materials
     */
    SelfProductionOfFixedAssetsDestructionOfRawMaterials = "E3_205",

    /**
     * Ιδιοπαραγωγή παγίων - Αυτοπαραδόσεις - Καταστροφές αποθεμάτων/Προϊόντα και παραγωγή σε εξέλιξη
     * Self-Production of Fixed Assets - Self-Deliveries - Destruction of Inventory/Products in Progress
     */
    SelfProductionOfFixedAssetsDestructionOfInProgressProducts = "E3_210",

    /**
     * Ιδιοπαραγωγή παγίων -Αυτοπαραδόσεις- Καταστροφές αποθεμάτων/πρώτες ύλες και λοιπά υλικά
     * Self-Production of Fixed Assets - Self-Deliveries - Destruction of Inventory/Raw Materials and Other Materials
     */
    SelfProductionOfFixedAssetsDestructionOfMaterials = "E3_305",

    /**
     * Ιδιοπαραγωγή παγίων - Αυτοπαραδόσεις - Καταστροφές αποθεμάτων/Πρόίόνεα και παραγωγή σε εξέλιξη
     * Self-Production of Fixed Assets - Self-Deliveries - Destruction of Inventory/Products and Production in Progress
     */
    SelfProductionOfFixedAssetsDestructionOfProductsInProgress = "E3_310",

    /**
     * Ιδιοπαραγωγή παγίων - Αυτοπαραδόσεις - Καταστροφές αποθεμάτων/Εξοδα παραγωγής
     * Self-Production of Fixed Assets - Self-Deliveries - Destruction of Inventory/Production Expenses
     */
    SelfProductionOfFixedAssetsDestructionOfProductionExpenses = "E3_318",

    /**
     * πωλήσεις αγαθών και υπηρεσιών Χονδρικές - Επιτηδευματιών
     * Wholesale Sales of Goods and Services - Entrepreneurs
     */
    WholesaleSalesOfGoodsAndServicesEntrepreneurs = "E3_561_001",


    /**
     * πωλήσεις αγαθών και υπηρεσιών Χονδρικ{ς βάσει άρθρου 39α παρ 5 του Κώδικα Φ.Π.Α. (Ν.2859/2000)
     * Wholesale Sales of Goods and Services Based on Article 39a Paragraph 5 of the VAT Code (Law 2859/2000)
     */
    WholesaleSalesGoodsServicesVATCode = "E3_561_002",

    /**
     * Πωλήσεις αγαθών και υπηρεσιών Λιανικές - Ιδιωτική Πελατεία
     * Retail Sales of Goods and Services - Private Customers
     */
    RetailSalesGoodsServicesPrivateCustomers = "E3_561_003",

    /**
     * πωλήσεις αγαθών και υπηρεσιών Λιανικές βάσει άρθρου 39α παρ 5 του Κώδικα Φ.Π.Α. (Ν.2859/2000)
     * Retail Sales of Goods and Services Based on Article 39a Paragraph 5 of the VAT Code (Law 2859/2000)
     */
    RetailSalesGoodsServicesVATCode = "E3_561_004",

    /**
     * Πωλήσεις αγαθών και υπηρεσιών Εξωτερικού Ενδοκοινοτικές
     * IntraCommunity External Sales of Goods and Services
     */
    IntraCommunityExternalSales = "E3_561_005",

    /**
     * Πωλήσεις αγαθών και υπηρεσιών Εξωτερικού Τρίτες Χώρες
     * External Sales of Goods and Services to Third Countries
     */
    ExternalSalesToThirdCountries = "E3_561_006",

    /**
     * Πωλήσεις αγαθών και υπηρεσιών Λοιπά
     * Other Sales of Goods and Services
     */
    OtherSalesOfGoodsAndServices = "E3_561_007",

    /**
     * Λοιπά συνήθη έσοδα
     * Other Ordinary Income
     */
    OtherOrdinaryIncome = "E3_562",

    /**
     * Πιστωτικσίτόκοι και συναφή έσοδα
     * Credit Stocks and Related Income
     */
    CreditStocksAndRelatedIncome = "E3_563",

    /**
     * Πιστωτικές συναλλαγματικές διαφορές
     * Credit Foreign Exchange Differences
     */
    CreditForeignExchangeDifferences = "E3_564",

    /**
     * Σσοδα συμμετοχών
     * Revenue from Participations
     */
    RevenueFromParticipations = "E3_565",

    /**
     * Κέρδη από διάθεση μη κυκλοφορσύνεων περιουσιακών στοιχείων
     * Profits from Disposal of Non-Circulating Assets
     */
    ProfitsFromDisposalOfNonCirculatingAssets = "E3_566",

    /**
     * Κέρδη από αναστροφή προβλέψεων και απομειώσεων
     * Gains from Reversal of Provisions and Depreciations
     */
    GainsFromReversalOfProvisions = "E3_567",

    /**
     * Κέρδη από επιμέτρηση στην εύλογη αξία
     * Gains from Fair Value Measurement
     */
    GainsFromFairValueMeasurement = "E3_568",

    /**
     * Ασυνήθη έσοδα και κέρδη
     * Unusual Income and Profits
     */
    UnusualIncomeAndProfits = "E3_570",

    /**
     * Σξοδα σε ιδιοπαραγωγή
     * Expenses in Self-Production
     */
    ExpensesInSelfProduction = "E3_595",

    /**
     * Επιδοτήσεις - Επιχορηγήσεις
     * Subsidies - Grants
     */
    SubsidiesAndGrants = "E3_596",

    /**
     * Επιδοτήσεις - Επιχορηγήσεις για επενδυτικούς σκοπούς - κάλυψη δαπανών
     * Subsidies - Grants for Investment Purposes - Expense Coverage
     */
    SubsidiesGrantsForInvestment = "E3_597",

    /**
     * πωλήσεις παγίων Χονδρικές
     * Wholesale Sales of Fixed Assets
     */
    WholesaleSalesOfFixedAssets = "E3_880_001",

    /**
     * πωλήσεις παγίων Λιανικές
     * Retail Sales of Fixed Assets
     */
    RetailSalesOfFixedAssets = "E3_880_002",

    /**
     * Πωλήσεις Παγίων Εξωτερικού Ενδοκοινοτικές
     * IntraCommunity External Sales of Fixed Assets
     */
    IntraCommunityExternalSalesOfFixedAssets = "E3_880_003",

    /**
     * Πωλήσεις Παγίων Εξωτερικού Τρίτες Χώρες
     * External Sales of Fixed Assets to Third Countries
     */
    ExternalSalesOfFixedAssetsToThirdCountries = "E3_880_004",

    /**
     * πωλήσεις για λογ/σμο Τρίτων Χονδρικές
     * Wholesale Sales on Behalf of Third Parties
     */
    WholesaleSalesOnBehalfOfThirdParties = "E3_881_001",

    /**
     * Πωλήσεις για λογ/σμο Τρίτων Λιανικές
     * Retail Sales on Behalf of Third Parties
     */
    RetailSalesOnBehalfOfThirdParties = "E3_881_002",

    /**
     * πωλήσεις για λογ/σμο Τρίτων Εξωτερικού Ενδοκοινοτικές
     * IntraCommunity External Sales on Behalf of Third Parties
     */
    IntraCommunityExternalSalesOnBehalfOfThirdParties = "E3_881_003",

    /**
     * Πωλήσεις για λογ/σμο Τρίτων Εξωτερικού Τρίτες Χώρες
     * External Sales on Behalf of Third Parties to Third Countries
     */
    ExternalSalesOnBehalfOfThirdPartiesToThirdCountries = "E3_881_004",

    /**
     * Πωλήσεις αγαθών που υπάγονται σε ΕΦΚ
     * Sales of Goods Subject to Excise Duty
     */
    SalesOfGoodsSubjectToExciseDuty = "E3_598_001",

    /**
     * Πωλήσεις για λογαριασμό αγροτών μέσω αγροτικού συνεταιρισμού κλπ
     * Sales on Behalf of Farmers Through Agricultural Cooperatives, etc.
     */
    SalesOnBehalfOfFarmersViaCooperatives = "E3_598_003",
}

export enum ExpensesClassificationCategoryEnumType {
    /**
     * category2_1 = Αγορές Εμπορευμάτων
     */
    PurchasesOfGoods = 'category2_1',

    /**
     * category2_2 = Αγορές Α'-Β' Υλών
     */
    PurchasesOfPrimarySecondaryMaterials = 'category2_2',

    /**
     * category2_3 = Λήψη Υπηρεσιών
     */
    ReceiptOfServices = 'category2_3',

    /**
     * category2_4 = Γενικά Έξοδα με δικαίωμα έκπτωσης ΦΠΑ
     */
    GeneralExpensesWithVATDeduction = 'category2_4',

    /**
     * category2_5 = Γενικά Έξοδα χωρίς δικαίωμα έκπτωσης ΦΠΑ
     */
    GeneralExpensesWithoutVATDeduction = 'category2_5',

    /**
     * category2_6 = Αμοιβές και Παροχές προσωπικού
     */
    SalariesAndBenefits = 'category2_6',

    /**
     * category2_7 = Αγορές Παγίων
     */
    FixedAssetsPurchases = 'category2_7',

    /**
     * category2_8 = Αποσβέσεις Παγίων
     */
    FixedAssetsDepreciation = 'category2_8',

    /**
     * category2_9 = Έξοδα για λ/σμο τρίτων
     */
    ExpensesForThirdPartySettlement = 'category2_9',

    /**
     * category2_10 = Έξοδα προηγούμενων χρήσεων
     */
    ExpensesOfPreviousPeriods = 'category2_10',

    /**
     * category2_11 = Έξοδα επομένων χρήσεων
     */
    ExpensesOfSubsequentPeriods = 'category2_11',

    /**
     * category2_12 = Λοιπές Εγγραφές Τακτοποίησης Εξόδων
     */
    OtherExpenseAdjustmentEntries = 'category2_12',

    /**
     * category2_13 = Αποθέματα Έναρξης Περιόδου
     */
    OpeningPeriodInventories = 'category2_13',

    /**
     * category2_14 = Αποθέματα Λήξης Περιόδου
     */
    ClosingPeriodInventories = 'category2_14',

    /**
     * category2_95 = Λοιπά Πληροφοριακά Στοιχεία Εξόδων
     */
    OtherInformationalExpenseData = 'category2_95'
}


export enum ExpensesClassificationEnumType {
    /**
     * Goods at the beginning
     * Εμπορεύματα έναρξης
     */
    GoodsAtTheBeginning = "E3_101",

    /**
     * Purchases of goods for use (net amount)/Wholesale
     * Αγορές εμπορευμάτων χρήσης (καθαρό ποσό)/Χονδρικές
     */
    PurchasesOfGoodsForUseWholesale = "E3_102_001",

    /**
     * Purchases of goods for use (net amount)/Retail
     * Αγορές εμπορευμάτων χρήσης (καθαρό ποσό)/Λιανικές
     */
    PurchasesOfGoodsForUseRetail = "E3_102_002",

    /**
     * Purchases of goods for use (net amount)/Goods of Article 39a, paragraph 5 of the VAT Code (Law 2859/2000)
     * Αγορές εμπορευμάτων χρήσης (καθαρό ποσό)/Αγαθών του άρθρου 39α παρ.5 του Κώδικα Φ.Π.Α. (ν.2859/2000)
     */
    PurchasesOfGoodsForUseGoodsOfArticle39a = "E3_102_003",

    /**
     * Purchases of goods for use (net amount)/External IntraCommunity
     * Αγορές εμπορευμάτων χρήσης (καθαρό ποσό)/Εξωτερικού Ενδοκοινοτικές
     */
    PurchasesOfGoodsForUseExternalIntraCommunity = "E3_102_004",

    /**
     * Purchases of goods for use (net amount)/External Third Countries
     * Αγορές εμπορευμάτων χρήσης (καθαρό ποσό)/Εξωτερικού Τρίτες Χώρες
     */
    PurchasesOfGoodsForUseExternalThirdCountries = "E3_102_005",

    /**
     * Purchases of goods for use (net amount)/Other
     * Αγορές εμπορευμάτων χρήσης (καθαρό ποσό)Λοιπά
     */
    PurchasesOfGoodsForUseOther = "E3_102_006",

    /**
     * Goods at the end
     * Εμπορεύματα λήξης
     */
    GoodsAtTheEnd = "E3_104",

    /**
     * Raw materials and production starting materials/Production
     * Πρώτες ύλες και υλικά έναρξης/Παραγωγή
     */
    RawMaterialsAndProductionStartingMaterialsProduction = "E3_201",

    /**
     * Purchases of raw materials and materials for use (net amount)/Wholesale
     * Αγορές πρώτων υλών και υλικών χρήσης (καθαρό ποσό)/Χονδρικές
     */
    PurchasesOfRawMaterialsWholesale = "E3_202_001",

    /**
     * Purchases of raw materials and materials for use (net amount)/Retail
     * Αγορές πρώτων υλών και υλικών χρήσης (καθαρό ποσό)/Λιανικές
     */
    PurchasesOfRawMaterialsRetail = "E3_202_002",

    /**
     * Purchases of raw materials and materials for use (net amount)/External IntraCommunity
     * Αγορές πρώτων υλών και υλικών χρήσης (καθαρό ποσό)/Εξωτερικού Ενδοκοινοτικές
     */
    PurchasesOfRawMaterialsExternalIntraCommunity = "E3_202_003",

    /**
     * Purchases of raw materials and materials for use (net amount)/External Third Countries
     * Αγορές πρώτων υλών και υλικών χρήσης (καθαρό ποσό)/Εξωτερικού Τρίτες Χώρες
     */
    PurchasesOfRawMaterialsExternalThirdCountries = "E3_202_004",

    /**
     * Purchases of raw materials and materials for use (net amount)/Other
     * Αγορές πρώτων υλών και υλικών χρήσης(καθαρό ποσό)/Λοιπά
     */
    PurchasesOfRawMaterialsOther = "E3_202_005",

    /**
     * Ending inventories of raw materials and materials/Production
     * Αποθέματα λήξης πρώτων υλών και υλικών/Παραγωγή
     */
    EndingInventoriesOfRawMaterials = "E3_204",

    /**
     * Products and work in progress at the beginning/Production
     * Προϊόντα και παραγωγή σε εξέλιξη έναρξης/Παραγωγή
     */
    ProductsAndWorkInProgressAtTheBeginning = "E3_207",

    /**
     * Adjustment of animals, plants, and goods
     * Απομείωση ζώων -φυτών- εμπορευμάτων
     */
    AdjustmentOfAnimalsPlantsAndGoods = "E3_314",

    /**
     * Self-production of fixed assets - Self-deliveries - Destruction of inventories
     * Ιδιοπαραγωγή παγίων-Αυτοπαραδόσεις- Καταστροφές αποθεμάτων
     */
    SelfProductionOfFixedAssets = "E3_106",

    /**
     * Self-production of fixed assets - Self-deliveries - Destruction of inventories
     * Ιδιοπαραγωγή παγίων-Αυτοπαραδόσεις- Καταστροφές αποθεμάτων
     */
    SelfProductionOfFixedAssets2 = "E3_205",

    /**
     * Self-production of fixed assets - Self-deliveries - Destruction of inventories
     * Ιδιοπαραγωγή παγίων - Αυτοπαραδόσεις - Καταστροφές αποθεμάτων
     */
    SelfProductionOfFixedAssets3 = "E3_305",

    /**
     * Self-production of fixed assets - Self-deliveries - Destruction of inventories
     * Ιδιοπαραγωγή παγίων - Αυτοπαραδόσεις - Καταστροφές αποθεμάτων
     */
    SelfProductionOfFixedAssets4 = "E3_210",

    /**
     * Self-production of fixed assets - Self-deliveries - Destruction of inventories
     * Ιδιοπαραγωγή παγίων - Αυτοπαραδόσεις - Καταστροφές αποθεμάτων
     */
    SelfProductionOfFixedAssets5 = "E3_310",

    /**
     * Self-production of fixed assets - Self-deliveries - Destruction of inventories
     * Ιδιοπαραγωγή παγίων - Αυτοπαραδόσεις - Καταστροφές αποθεμάτων
     */
    SelfProductionOfFixedAssets6 = "E3_318",

    /**
     * Purchases of goods subject to Excise Duty
     * Αγορές αγαθών που υπάγονται σε ΕΦΚ
     */
    PurchasesOfGoodsSubjectToExciseDuty = "E3_598_002",

    /**
     * Losses from disposal-withdrawal of non-current assets
     * Ζημμιές από διάθεση-απόσυρση μη κυκλοφορούντων περιουσιακών στοιχείων
     */
    LossesFromDisposalWithdrawalOfNonCurrentAssets = "E3_584",

    /**
     * Management fees for domestic and foreign management
     * Προμήθειες διαχείρισης ημεδαπής - αλλοδαπής (management fees)
     */
    ManagementFees = "E3_585_001",

    /**
     * Expenses from related companies
     * Δαπάνες από συνδεδεμένες επιχειρήσεις
     */
    ExpensesFromRelatedCompanies = "E3_585_002",

    /**
     * Expenses from non-cooperating countries or countries with preferential tax regimes
     * Δαπάνες από μη συνεργαζόμενα κράτη ή από κράτη με προνομιακό φορολογικό καθεστώς
     */
    ExpensesFromNonCooperatingCountries = "E3_585_003",

    /**
     * Expenses for informative conferences
     * Δαπάνες για ενημερωτικές ημερίδες
     */
    ExpensesForInformativeConferences = "E3_585_004",

    /**
     * Reception and accommodation expenses
     * Έξοδα υποδοχής και φιλοξενίας
     */
    ReceptionAndAccommodationExpenses = "E3_585_005",

    /**
     * Travel expenses
     * Έξοδα ταξιδιών
     */
    TravelExpenses = "E3_585_006",

    /**
     * Social security contributions for self-employed individuals
     * Ασφαλιστικές Εισφορές Αυτοαπασχολούμενων
     */
    SocialSecurityContributions = "E3_585_007",

    /**
     * Expenses and commissions for farmers' orders
     * Έξοδα και προμήθειες παραγγελιοδόχου για λογαριασμό αγροτών
     */
    ExpensesAndCommissionsForFarmers = "E3_585_008",

    /**
     * Other fees for domestic services
     * Λοιπές Αμοιβές για υπηρεσίες ημεδαπής
     */
    OtherFeesForDomesticServices = "E3_585_009",

    /**
     * Other fees for foreign services
     * Λοιπές Αμοιβές για υπηρεσίες αλλοδαπής
     */
    OtherFeesForForeignServices = "E3_585_010",

    /**
     * Energy
     * Ενέργεια
     */
    Energy = "E3_585_011",

    /**
     * Water supply
     * Ύδρευση
     */
    WaterSupply = "E3_585_012",

    /**
     * Telecommunications
     * Τηλεπικοινωνίες
     */
    Telecommunications = "E3_585_013",

    /**
     * Rent
     * Ενοίκια
     */
    Rent = "E3_585_014",

    /**
     * Advertising and promotion
     * Διαφήμιση και προβολή
     */
    AdvertisingAndPromotion = "E3_585_015",

    /**
     * Other expenses
     * Λοιπά έξοδα
     */
    OtherExpenses = "E3_585_016",

    /**
     * Miscellaneous operating expenses Z2
     * Διάφορα λειτουργικά έξοδα Ζ2
     */
    MiscellaneousOperatingExpensesZ2 = "E3_585_017",

    /**
     * Interest and related expenses
     * Τόκοι και συναφή έξοδα
     */
    InterestAndRelatedExpenses = "E3_586",

    /**
     * Amortization
     * Αποσβέσεις
     */
    Amortization = "E3_587",

    /**
     * Unusual expenses, losses, and fines
     * Ασυνήθεις έξοδα, ζημιές και πρόστιμα
     */
    UnusualExpensesAndLosses = "E3_588",

    /**
     * Provisions (excluding personnel provisions)
     * Προβλέψεις (εκτός από προβλέψεις για το προσωπικό)
     */
    Provisions = "E3_589",

    /**
     * Purchases of tangible fixed assets (wholesale)
     * Αγορές ενσώματων παγίων χρήσης/Χονδρικές
     */
    PurchasesOfTangibleFixedAssetsWholesale = "E3_882_001",

    /**
     * Purchases of tangible fixed assets (retail)
     * Αγορές ενσώματων παγίων χρήσης/Λιανικές
     */
    PurchasesOfTangibleFixedAssetsRetail = "E3_882_002",

    /**
     * Purchases of tangible fixed assets (external intra-community)
     * Αγορές ενσώματων παγίων χρήσης/Εξωτερικού Ενδοκοινοτικές
     */
    PurchasesOfTangibleFixedAssetsExternalIntraCommunity = "E3_882_003",

    /**
     * Purchases of tangible fixed assets (external third countries)
     * Αγορές ενσώματων παγίων χρήσης/Εξωτερικού Τρίτες Χώρες
     */
    PurchasesOfTangibleFixedAssetsExternalThirdCountries = "E3_882_004",

    /**
     * Purchases of intangible fixed assets (wholesale)
     * Αγορές μη ενσώματων παγίων χρήσης/Χονδρικές
     */
    PurchasesOfIntangibleFixedAssetsWholesale = "E3_883_001",

    /**
     * Purchases of intangible fixed assets (retail)
     * Αγορές μη ενσώματων παγίων χρήσης/Λιανικές
     */
    PurchasesOfIntangibleFixedAssetsRetail = "E3_883_002",

    /**
     * Purchases of intangible fixed assets (external intra-community)
     * Αγορές μη ενσώματων παγίων χρήσης/Εξωτερικού Ενδοκοινοτικές
     */
    PurchasesOfIntangibleFixedAssetsExternalIntraCommunity = "E3_883_003",

    /**
     * Purchases of intangible fixed assets (external third countries)
     * Αγορές μη ενσώματων παγίων χρήσης/Εξωτερικού Τρίτες Χώρες
     */
    PurchasesOfIntangibleFixedAssetsExternalThirdCountries = "E3_883_004",

    /**
     * Purchases & expenses within the country
     * Αγορές & δαπάνες στο εσωτερικό της χώρας
     */
    PurchasesAndExpensesWithinTheCountry = "VAT_361",

    /**
     * Purchases & imports of capital goods (fixed)
     * Αγορές ἃ εισαγωγές επενδ. Αγαθών (πάγια)
     */
    PurchasesAndImportsOfCapitalGoods = "VAT_362",

    /**
     * Other imports excluding capital goods (fixed)
     * Λοιπές εισαγωγές εκτός επενδ. Αγαθών (πάγια)
     */
    OtherImportsExcludingCapitalGoods = "VAT_363",

    /**
     * Intra-community acquisitions of goods
     * Ενδοκοινοτικές αποκτήσεις αγαθών
     */
    IntraCommunityAcquisitionsOfGoods = "VAT_364",

    /**
     * Intra-community receipt of services Article 14.2.a
     * Ενδοκοινοτικές λήψεις υπηρεσιών ἀρθρ. 14.2.α
     */
    IntraCommunityReceiptOfServices = "VAT_365",

    /**
     * Other recipient transactions
     * Λοιπές πράξεις λήπτη
     */
    OtherRecipientTransactions = "VAT_366",

    /**
     * Adjustment of goods
     * Απομείωση εμπορευμάτων
     */
    AdjustmentOfGoods = "E3_103",

    /**
     * Adjustment of raw materials and materials
     * Απομείωση πρώτων υλών και υλικών
     */
    AdjustmentOfRawMaterialsAndMaterials = "E3_203",

    /**
     * Adjustment of raw materials and materials
     * Απομείωση πρώτων υλών και υλικών
     */
    AdjustmentOfRawMaterialsAndMaterials2 = "E3_303",

    /**
     * Adjustment of products and work in progress
     * Απομείωση προϊόντων και παραγωγής σε εξέλιξη
     */
    AdjustmentOfProductsAndWorkInProgress = "E3_208",

}

export enum PaymentMethodEnumType {
    /**
     * 1 Επαγ. Λογαριασμός Πληρωμών Ημεδαπής
     */
    DomesticBusinessPaymentAccount = "1",

    /**
     * 2 Επαγ. Λογαριασμός Πληρωμών Αλλοδαπής
     */
    ForeignBusinessPaymentAccount = "2",

    /**
     * 3 Μετρητά
     */
    Cash = "3",

    /**
     * 4 Επιταγή
     */
    Check = "4",

    /**
     * 5 Επί Πιστώσει
     */
    OnCredit = "5",

    /**
     * 6 Web Banking
     */
    WebBanking = "6",

    /**
     * 7 POS / e-POS
     */
    PosOrEPos = "7"
}

export enum MeasurementUnitEnumType {
    /**
     * 1 Τεμάχια
     */
    Pieces = "1",

    /**
     * 2 Κιλά
     */
    Kilograms = "2",

    /**
     * 3 Λίτρα
     */
    Liters = "3"
}

export enum MovePurposeEnumType {
    /**
     * 1 Πώληση
     */
    Sale = "1",

    /**
     * 2 Πώληση για Λογαριασμό Τρίτων
     */
    SaleOnBehalfOfThirdParty = "2",

    /**
     * 3 Δειγματισμός
     */
    Sampling = "3",

    /**
     * 4 Έκθεση
     */
    Exhibition = "4",

    /**
     * 5 Επιστροφή
     */
    Return = "5",

    /**
     * 6 Φύλαξη
     */
    Storage = "6",

    /**
     * 7 Επεξεργασία Συναρμολόγηση
     */
    ProcessingAssembly = "7",

    /**
     * 8 Μεταξύ Εγκαταστάσεων Οντότητας
     */
    BetweenEntityFacilities = "8"
}

export enum InvoiceDetailEnumType {
    /**
     * 1 Εκκαθάριση Πωλήσεων Τρίτων
     */
    ThirdPartySalesClearing = "1",

    /**
     * 2 Αμοιβή από Πωλήσεις Τρίτων
     */
    FeeFromThirdPartySales = "2"
}

/**
 * Είδος Γραμμής
 */
export enum RecEnumType {
    /**
     * 1 Ειδική Γραμμή Παρακρατούμενων Φόρων
     */
    SpecialLineOfWithholdingTaxes = "1",

    /**
     * 2 Γραμμή Τέλους με Φ.Π.Α.
     */
    FeeLineWithVAT = "2",

    /**
     * 3 Γραμμή Λοιπών Φόρων µε ΦΠΑ.
     */
    OtherTaxesLineWithVAT = "3",

    /**
     * 4 Ἐιδική Γραμμή Χαρτοσήμου
     */
    SpecialStampDutyLine = "4",

    /**
     * 5 Ειδική Γραμμή Κρατήσεων.
     */
    SpecialWithholdingLine = "5",

    /**
     * 6 Δωροεπιταγή
     */
    GiftVoucher = "6",

    /**
     * 7 Αρνητικό πρόσημο αξιών.
     */
    NegativeValueSign = "7"
}

export enum FuelCodeEnumType {
    /**
     * 10 Benzine 95RON
     */
    Benzine95RON = "10",

    /**
     * 11 Benzine 95RON+
     */
    Benzine95RONPlus = "11",

    /**
     * 12 Benzine 100RON
     */
    Benzine100RON = "12",

    /**
     * 13 Benzine LRP
     */
    BenzineLRP = "13",

    /**
     * 14 Βενζίνη αεροπλάνων
     */
    AviationGasoline = "14",

    /**
     * 15 Ειδικό καύσιμο αεριωθουμένων
     */
    SpecialJetFuel = "15",

    /**
     * 20 Diesel
     */
    Diesel = "20",

    /**
     * 21 Diesel premium
     */
    DieselPremium = "21",

    /**
     * 30 Diesel Heatnn
     */
    DieselHeating = "30",

    /**
     * 31 Diesel Heat premium
     */
    DieselHeatingPremium = "31",

    /**
     * 32 Diesel Light
     */
    DieselLight = "32",

    /**
     * 33 Diesel άλλων χρήσεων
     */
    OtherUseDiesel = "33",

    /**
     * 34 Diesel ναυτιλίας
     */
    MarineDiesel = "34",

    /**
     * 35 Κηροζίνη JP1
     */
    KeroseneJP1 = "35",

    /**
     * 36 Κηροζίνη άλλων χρήσεων
     */
    OtherUseKerosene = "36",

    /**
     * 37 Μαζούτ
     */
    Mazut = "37",

    /**
     * 38 Μαζούτ ναυτιλίας
     */
    MarineMazut = "38",

    /**
     * 40 LPG (υγραέριο)
     */
    LPG = "40",

    /**
     * 41 Υγραέριο (LPG) και μεθάνιο βιομηχανικό /εμπορικό κινητήρων (χύδην)
     */
    BulkIndustrialCommercialLPGAndMethane = "41",

    /**
     * 42 Υγραέριο (LPG) και μεθάνιο θέρμανσης και λοιπών χρήσεων (χύδην)
     */
    BulkHeatingAndOtherUsesLPGAndMethane = "42",

    /**
     * 43 Υγραέριο (LPG) και μεθάνιο βιομηχανικό /εμπορικό κινητήρων (σε φιάλες)
     */
    BottledIndustrialCommercialLPGAndMethane = "43",

    /**
     * 44 Υγραέριο (LPG) και μεθάνιο θέρμανσης και λοιπών χρήσεων (σε φιάλες)
     */
    BottledHeatingAndOtherUsesLPGAndMethane = "44",

    /**
     * 50 CNG (πεπιεσμένο φυσικό αέριο)
     */
    CNG = "50",

    /**
     * 60 Αρωματικοί Υδρογονάνθρακες Δασμολογικής Κλάσης 2707
     */
    AromaticHydrocarbonsClass2707 = "60",

    /**
     * 61 Κυκλικοί Υδρογονάνθρακες Δασμολογικής Κλάσης 2902
     */
    CyclicHydrocarbonsClass2902 = "61",

    /**
     * 70 Ελαφρύ πετρέλαιο (WHITE SPIRIT)
     */
    LightOilWhiteSpirit = "70",

    /**
     * 71 Ελαφριά λάδια
     */
    LightOils = "71",

    /**
     * 72 Βιοντίζελ
     */
    Biodiesel = "72",

    /**
     * 999 Λοιπές χρεώσεις υπηρεσιών
     */
    OtherServiceCharges = "999"
}

export enum InvoiceVariationEnumType {
    /**
     * 1 Διαβίβαση Παράλειψης από Λήπτη
     */
    OmissionTransmissionByRecipient = "1",

    /**
     * 2 Διαβίβαση Παράλειψης από Εκδότη
     */
    OmissionTransmissionByIssuer = "2",

    /**
     * 3 Διαβίβαση Απόκλισης από Λήπτη
     */
    DeviationTransmissionByRecipient = "3",

    /**
     * 4 Διαβίβαση Απόκλισης από Εκδότη
     */
    DeviationTransmissionByIssuer = "4"
}

export enum SpecialInvoiceCategoryEnumType {
    /**
     * 1 Επιδοτήσεις - Επιχορηγήσεις
     */
    SubsidiesGrants = "1",

    /**
     * 2 Έσοδα Λιανικής Ξενοδοχείων - Χρεώσεις Δωματίου
     */
    HotelRetailIncomeRoomCharges = "2",

    /**
     * 3 Λογιστική Εγγραφή
     */
    AccountingEntry = "3",

    /**
     * 4 Tax Free
     */
    TaxFree = "4",

    /**
     * 5 Σύνθετες συναλλαγές ημεδαπής - αλλοδαπής
     */
    ComplexDomesticForeignTransactions = "5",

    /**
     * 6 Δικαιούχοι του άρθρου 3 της υπό στοιχεία 139818 EΞ2022/28.09.2022 (Β 5083) κοινής υπουργικής απόφασης
     */
    Article3BeneficiariesOfJointMinisterialDecision139818EX2022 = "6",

    /**
     * 7 Αγορά αγροτικών αγαθών υπηρεσιών Άρθρο 41 του Κώδικα ΦΠΑ
     */
    AgriculturalGoodsServicesPurchaseArticle41VATCode = "7",

    /**
     * 8 Έσοδα Λιανικών ΦΗΜ ΑΑΔΕ
     */
    RetailRevenueAADE = "8",

    /**
     * 9 Έσοδα Λιανικών ΦΗΜ ΑΑΔΕ_2
     */
    RetailRevenueAADE2 = "9",

    /**
     * 10 Έσοδα Λιανικών ΦΗΜ Επιχείρησης Απόκλιση
     */
    RetailRevenueBusinessDeviation = "10"
}

export enum EntityEnumType {
    /**
     * 1 Φορολογικός Εκπρόσωπος
     */
    TaxRepresentative = "1",

    /**
     * 2 Διαμεσολαβητής
     */
    Intermediary = "2"
}

export enum TaxEnumType {
    /**
     * 1 Παρακρατούμενος Φόρος
     */
    WithholdingTax = "1",

    /**
     * 2 Τέλη
     */
    Fees = "2",

    /**
     * 3 Λοιποί Φόροι
     */
    OtherTaxes = "3",

    /**
     * 4 Χαρτόσημο
     */
    StampDuty = "4",

    /**
     * 5 Κρατήσεις
     */
    Deductions = "5"
}