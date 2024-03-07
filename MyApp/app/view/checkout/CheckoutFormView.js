Ext.define("MyApp.view.checkout.CheckoutFormView", {
    extend: "Ext.container.Container",
    xtype: "form-checkout",
  
    title: {
      text: "Checkout",
      textAlign: "center",
    },
    items: [
      {
        xtype: "form",
        title: "Complete Checkout Form",
        height:600,
        autoShow: true,
        closable: true,
        modal: true,
        bodyPadding: 10,
        scrollable: true,
        frame: true,
        items: [
          {
            xtype: "form",
            layout: "column",
            items: [
              {
                columnWidth: 0.95,
                margin: "5 5 5 5",
                items: [
                  {
                    xtype: "fieldset",
                    title: "Contact Information",
                    layout: "anchor",
                    defaults: {
                      anchor: "100%",
                    },
                    items: [
                      {
                        xtype: "fieldcontainer",
                        labelWidth: 100,
                        layout: "hbox",
                        fieldLabel: "Name",
                        items: [
                          {
                            xtype: "textfield",
                            emptyText: "First",
                            flex: 1,
                          },
                          {
                            xtype: "splitter",
                          },
                          {
                            xtype: "textfield",
                            emptyText: "Last",
                            flex: 1,
                          },
                        ],
                      },
                      {
                        layout: "hbox",
                        xtype: "container",
  
                        items: [
                          {
                            xtype: "textfield",
                            fieldLabel: "Email Address",
                            name: "email",
                            vtype: "email",
                            flex: 1,
                            allowBlank: false,
                          },
                          {
                            fieldLabel: "Phone Number",
                            xtype: "textfield",
                            name: "phone",
                            labelWidth: 100,
                            flex: 1,
                            emptyText: "xxx-xxx-xxxx",
                            maskRe: /[\d\-]/,
                            regex: /^\d{3}-\d{3}-\d{4}$/,
                            regexText: "Must be in the format xxx-xxx-xxxx",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    xtype: "fieldset",
                    title: "Mailing Address",
                    layout: "anchor",
                    defaults: {
                      anchor: "100%",
                    },
                    items: [
                      {
                        fieldLabel: "Street Address",
                        xtype: "textfield",
                        name: "mailingStreet",
                        reference: "mailingStreet",
                        allowBlank: false,
                      },
                      {
                        layout: "hbox",
                        xtype: "container",
                        items: [
                          {
                            xtype: "textfield",
                            fieldLabel: "City",
                            name: "mailingCity",
                            reference: "mailingCity",
                            flex: 1,
                            allowBlank: false,
                          },
                          {
                            xtype: "combobox",
                            fieldLabel: "State",
                            name: "mailingState",
                            reference: "mailingState",
                            forceSelection: true,
                            flex: 1,
                            enforceMaxLength: true,
                            valueField: "abbr",
                            displayField: "abbr",
                            typeAhead: true,
                            queryMode: "local",
                            allowBlank: false,
  
                            listConfig: {
                              minWidth: null,
                            },
                            store: {
                              type: "",
                            },
                          },
                          {
                            xtype: "textfield",
                            fieldLabel: "Postal Code",
                            name: "mailingPostalCode",
                            reference: "mailingPostalCode",
                            flex: 1,
                            allowBlank: false,
                            maxLength: 10,
                            enforceMaxLength: true,
                            maskRe: /[\d\-]/,
                            regex: /^\d{5}(\-\d{4})?$/,
                            regexText:
                              "Must be in the format xxxxx or xxxxx-xxxx",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    xtype: "fieldset",
                    title: "Billing Address",
                    layout: "anchor",
  
                    defaults: {
                      anchor: "100%",
                      componentCls: "",
                    },
  
                    items: [
                      {
                        xtype: "checkbox",
                        boxLabel: "Same as Mailing Address?",
                        name: "billingSameAsMailing",
                        reference: "billingSameAsMailing",
  
                        hideLabel: true,
                        checked: true,
                        margin: "0 0 10 0",
                        handler: "onSameAddressChange",
                      },
                      {
                        xtype: "textfield",
                        fieldLabel: "Street Address",
                        name: "billingStreet",
                        reference: "billingStreet",
  
                        labelWidth: 110,
                        style: "opacity: 0.5",
                        disabled: true,
                        allowBlank: false,
                      },
                      {
                        xtype: "container",
                        layout: "hbox",
                        margin: "0 0 5 0",
  
                        items: [
                          {
                            xtype: "textfield",
                            fieldLabel: "City",
                            name: "billingCity",
                            reference: "billingCity",
  
                            labelWidth: 110,
                            style: "opacity: 0.5",
                            flex: 1,
                            disabled: true,
                            allowBlank: false,
                          },
                          {
                            xtype: "combobox",
                            fieldLabel: "State",
                            name: "billingState",
                            reference: "billingState",
  
                            width: 125,
                            enforceMaxLength: true,
                            style: "opacity: 0.5",
                            labelWidth: 50,
                            valueField: "abbr",
                            displayField: "abbr",
                            typeAhead: true,
                            queryMode: "local",
                            disabled: true,
                            allowBlank: false,
                            forceSelection: true,
  
                            listConfig: {
                              minWidth: null,
                            },
                          },
                          {
                            xtype: "textfield",
                            fieldLabel: "Postal Code",
                            name: "billingPostalCode",
                            reference: "billingPostalCode",
                            padding: 0,
                            labelWidth: 80,
                            style: "opacity: 0.5",
                            width: 160,
                            disabled: true,
                            allowBlank: false,
                            maxLength: 10,
                            enforceMaxLength: true,
                            maskRe: /[\d\-]/,
                            regex: /^\d{5}(\-\d{4})?$/,
                            regexText:
                              "Must be in the format xxxxx or xxxxx-xxxx",
                          },
                        ],
                      },
                    ],
                  },
  
                  {
                    xtype: "fieldset",
                    title: "Payment",
  
                    layout: "anchor",
                    defaults: {
                      anchor: "100%",
                      componentCls: "",
                    },
  
                    items: [
                      {
                        xtype: "radiogroup",
  
                        layout: {
                          autoFlex: false,
                        },
  
                        defaults: {
                          name: "ccType",
                          margin: "0 15 0 0",
                        },
  
                        items: [
                          {
                            boxLabel: "VISA",
                            inputValue: "visa",
                            checked: true,
                          },
                          {
                            boxLabel: "MasterCard",
                            inputValue: "mastercard",
                          },
                          {
                            boxLabel: "American Express",
                            inputValue: "amex",
                          },
                          {
                            boxLabel: "Discover",
                            inputValue: "discover",
                          },
                        ],
                      },
                      {
                        xtype: "textfield",
                        fieldLabel: "Name On Card",
                        name: "ccName",
                        labelWidth: 110,
                        allowBlank: false,
                      },
                      {
                        xtype: "container",
                        layout: "hbox",
                        margin: "0 0 5 0",
  
                        items: [
                          {
                            xtype: "textfield",
                            fieldLabel: "Card Number",
                            name: "ccNumber",
                            labelWidth: 110,
                            flex: 1,
                            allowBlank: false,
                            minLength: 15,
                            maxLength: 16,
                            enforceMaxLength: true,
                            maskRe: /\d/,
                          },
                          {
                            xtype: "fieldcontainer",
                            fieldLabel: "Expiration",
                            labelWidth: 75,
                            layout: "hbox",
                            componentCls: "",
  
                            items: [
                              {
                                xtype: "combobox",
                                name: "ccExpireMonth",
  
                                displayField: "name",
                                valueField: "number",
                                queryMode: "local",
                                emptyText: "Month",
                                hideLabel: true,
                                width: 100,
                                allowBlank: false,
                                forceSelection: true,
                              },
                              {
                                xtype: "numberfield",
                                name: "ccExpireYear",
                                padding: 0,
                                width: 90,
                                hideLabel: true,
                                value: new Date().getFullYear(),
                                minValue: new Date().getFullYear(),
                                allowBlank: false,
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  });
  