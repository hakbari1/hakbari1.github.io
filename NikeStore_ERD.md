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
    last name
    sex
    phone number
    adress
}
SALES {
    sale number
    sale date
    cash sales
    card sales
}
INVENTORY {
    product category
    how many in stock
    location of the product
}
CUSTOMER ||---o{PRODUCT : orders }
SALES ||---O{ INVENTORY : includes}
PRODUCT ||---O{ INVENTORY : come from}
```