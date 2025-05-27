# Nike Shoes Store

```mermaid
erDiagram
PRODUCT { 
   name
   category
   size
   color
   price
   }
CUSTOMER {
    name
    last_name
    sex
    phone_number
    adress
}
SALES {
    sale_number
    sale_date
    cash_sales
    card_sales
}
INVENTORY {
    product_category
    how_many_in_stock
    location
}
CUSTOMER ||--o{PRODUCT : orders }
SALES ||--O{ INVENTORY : includes}
PRODUCT ||--O{ INVENTORY : come_from}
```