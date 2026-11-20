const CATEGORIES = ["Gaming","Travel","Kitchen","Office","Smart Home","Wearables","Car","Creator","Pet Tech","Gifts"];

const PRODUCTS = [
  {
    "name": "Funny Santa Butt Plush Tissue Box Cover Santa Claus Tissue Dispenser Holder Novelty Christmas Tissue Case for Home Car Office",
    "category": "Office",
    "price": "$8.47",
    "link": "https://s.click.aliexpress.com/e/_EvJwG2S",
    "image": "images/funny-santa-butt-plush-tissue-box-cover--1795171819293.jpg",
    "desc": ""
  },
  {
    "name": "Artificial Candy Cane Ornaments Red Green Striped Plastic Candy Canes Christmas Tree Hanging Decor for Holiday Party Home Decor",
    "category": "Gifts",
    "price": "$6.63",
    "link": "https://s.click.aliexpress.com/e/_ExbRJMi",
    "image": "images/artificial-candy-cane-ornaments-red-gree-1795171686398.jpg",
    "desc": ""
  },
  {
    "name": "2026 Christmas Mouse Advent Calendar 2D Acrylic Animal Ornaments 24 Days Christmas Mice Ornaments for Living Room Front Door",
    "category": "Gifts",
    "price": "$36.93",
    "link": "https://s.click.aliexpress.com/e/_Eueqmdo",
    "image": "images/2026-christmas-mouse-advent-calendar-2d--1795171546612.jpg",
    "desc": ""
  },
  {
    "name": "44Pcs 6CM Christmas Ball Christmas Decoration Xmas Tree Pendent Ornaments Home Decor Navidad Party New Year 2026 Party Supplies",
    "category": "Smart Home",
    "price": "$40.62",
    "link": "https://s.click.aliexpress.com/e/_EQ4eGNC",
    "image": "images/44pcs-6cm-christmas-ball-christmas-decor-1795171363606.jpg",
    "desc": ""
  },
  {
    "name": "Solid Color Large Velvet Christmas Bow Long Streamers Wrinkle Resistant Christmas Tree Topper Bow Long Streamers Elegance",
    "category": "Smart Home",
    "price": "$42.50",
    "link": "https://s.click.aliexpress.com/e/_EHe8MMI",
    "image": "images/solid-color-large-velvet-christmas-bow-l-1795171215687.jpg",
    "desc": ""
  },
  {
    "name": "1CM 100pcs Color Goose Stone Luminous Stone Garden Fish Tank Landscape Glow-in-the-dark Stone Decoration Artificial Fluorescent",
    "category": "Smart Home",
    "price": "$13.85",
    "link": "https://s.click.aliexpress.com/e/_EyW0jFu",
    "image": "images/1cm-100pcs-color-goose-stone-luminous-st-1795171053396.jpg",
    "desc": ""
  },
  {
    "name": "High Resilience Swivel Gaming Chair Ergonomic Desk Chair Adjustable Rotatable Office Chair for Home Indoor Use",
    "category": "Gaming",
    "price": "$146.57",
    "link": "https://s.click.aliexpress.com/e/_EJfC3kE",
    "image": "images/high-resilience-swivel-gaming-chair-ergo-1795101749010.jpg",
    "desc": ""
  },
  {
    "name": "Living Room Lustre Candle E14 Pendant Light Home Decor Crystal Led Luminarias Indoor Light Luxury French Black Glass Chandelier",
    "category": "Smart Home",
    "price": "$199.49",
    "link": "https://s.click.aliexpress.com/e/_EHLEh2A",
    "image": "images/living-room-lustre-candle-e14-pendant-li-1795101707393.jpg",
    "desc": ""
  },
  {
    "name": "Unisex Casual Four Seasons Slippers Sandals Women Comfortable Home Slippers Breathable Slip-On Shoes For Women And Men Shoes",
    "category": "Travel",
    "price": "$13.22",
    "link": "https://s.click.aliexpress.com/e/_Ewb0b7C",
    "image": "images/unisex-casual-four-seasons-slippers-sand-1795101664261.jpg",
    "desc": ""
  },
  {
    "name": "Household Enamel Colored Flower Glass Water Cup Round Coffee Cup Breakfast Milk Juice Cup",
    "category": "Kitchen",
    "price": "$15.62",
    "link": "https://s.click.aliexpress.com/e/_EwPkFp4",
    "image": "images/household-enamel-colored-flower-glass-wa-1795101629047.jpg",
    "desc": ""
  },
  {
    "name": "1pc/2pcs/3pcs Cyberpunk Robot Face Design Backpack, Lunch Bag, Storage Bag with Neon Blue and Purple Glowing Effect",
    "category": "Gaming",
    "price": "$37.54",
    "link": "https://s.click.aliexpress.com/e/_EGCDIum",
    "image": "images/1pc-2pcs-3pcs-cyberpunk-robot-face-desig-1795100426900.jpg",
    "desc": ""
  },
  {
    "name": "2026 New Electric Portable Blender",
    "category": "Kitchen",
    "price": "$81.53",
    "link": "https://s.click.aliexpress.com/e/_EGoWMzg",
    "image": "images/2026-new-electric-portable-blender-1795080123538.jpg",
    "desc": ""
  },
  {
    "name": "Alarm Clock for Kids Ok to Wake Children with Sleep Training and Sound Machine Birthday Gift for Boy Girls",
    "category": "Gifts",
    "price": "$37.44",
    "link": "https://s.click.aliexpress.com/e/_EHUul0i",
    "image": "images/alarm-clock-for-kids-ok-to-wake-children-1795080103857.jpg",
    "desc": ""
  },
  {
    "name": "Automatic Food Vacuum Sealer with Preservation Modes Plastic Bag Sealing Machine Food Storage Vacuum Package Machine for Kitchen",
    "category": "Kitchen",
    "price": "$86.20",
    "link": "https://s.click.aliexpress.com/e/_EyQEa9u",
    "image": "images/automatic-food-vacuum-sealer-with-preser-1795080085891.jpg",
    "desc": ""
  },
  {
    "name": "Gen1 Tuya Ivy Smart Planter,Endless Fun Over 49 Rich Expressions,7 smart sensors,AI Chips Make Raising Plants Easy and Fun",
    "category": "Gifts",
    "price": "$121.09",
    "link": "https://s.click.aliexpress.com/e/_ExPVi7y",
    "image": "images/gen1-tuya-ivy-smart-planter-endless-fun--1795080065929.jpg",
    "desc": ""
  },
  {
    "name": "Original MIJIA Smart Eye Massager Zone Massage Visual Folding Massage Glasses Custom Eye Health Work For Mi Home APP NEW",
    "category": "Wearables",
    "price": "$106.66",
    "link": "https://s.click.aliexpress.com/e/_Evngn70",
    "image": "images/original-mijia-smart-eye-massager-zone-m-1795080043478.jpg",
    "desc": ""
  },
  {
    "name": "New Design Home Decoration Wall Lamp PLA Material 3D Print Lampshade Sconce Light Astronaut Climbing Moon Style Children Lustres",
    "category": "Smart Home",
    "price": "$23.85",
    "link": "https://s.click.aliexpress.com/e/_EIsBoMW",
    "image": "images/new-design-home-decoration-wall-lamp-pla-1795080023847.jpg",
    "desc": ""
  },
  {
    "name": "CENRR 98000PA Car Vacuum Cleaner Portable Wireless Cleaner Powerful Strong Suction Handheld Cleaning Machine for Home Appliance",
    "category": "Car",
    "price": "$39.39",
    "link": "https://s.click.aliexpress.com/e/_Ezo5BEq",
    "image": "images/cenrr-98000pa-car-vacuum-cleaner-portabl-1795080005430.jpg",
    "desc": ""
  },
  {
    "name": "4-in-1 Vegetable Cutter, for Slicing & Dicing Automatic Vegetable Carrot Potato Chopper Slice Shred And Diced, for Home Kitchen",
    "category": "Kitchen",
    "price": "$210.93",
    "link": "https://s.click.aliexpress.com/e/_EvlkyTM",
    "image": "images/4-in-1-vegetable-cutter-for-slicing-dici-1795079986337.jpg",
    "desc": ""
  },
  {
    "name": "50-100LBS Pedal Tension Rope Men Abdominal Strengthen Elastic Band Tension Rope Expand Chest Strength Exercise Fitness Equipment",
    "category": "Smart Home",
    "price": "$30.69",
    "link": "https://s.click.aliexpress.com/e/_EIOAxxo",
    "image": "images/50-100lbs-pedal-tension-rope-men-abdomin-1795079946597.jpg",
    "desc": ""
  },
  {
    "name": "3D Dynamic Galaxy Projector Romantic Gift Children Adult Bedroom Night Light Projector",
    "category": "Smart Home",
    "price": "$210.03",
    "link": "https://s.click.aliexpress.com/e/_Ex5HCUI",
    "image": "images/3d-dynamic-galaxy-projector-romantic-gif-1795077380682.jpg",
    "desc": ""
  },
  {
    "name": "22inch Ring Light With 54/67inch Wall Mount Boom Arm Photo Studio Kit 180º Flexible 3/8\" 1/4\" Thread Stand And Led Fill Light",
    "category": "Creator",
    "price": "$183.73",
    "link": "https://s.click.aliexpress.com/e/_EQoYzoE",
    "image": "images/22inch-ring-light-with-54-67inch-wall-mo-1795077433885.jpg",
    "desc": ""
  },
  {
    "name": "Tuya Smart LED Light 220V RGB Neon Strip 5050 Waterproof Flexible Tape IR/Bluetooth or Wifi Control Work with Alexa Google Home",
    "category": "Smart Home",
    "price": "$28.75",
    "link": "https://s.click.aliexpress.com/e/_EyXD3Cw",
    "image": "images/tuya-smart-led-light-220v-rgb-neon-strip-1795077469999.jpg",
    "desc": ""
  },
  {
    "name": "7000 Btu Efficient Portable Small Room Freestanding air Conditioner Mobile Small air Conditioner",
    "category": "Smart Home",
    "price": "$279.59",
    "link": "https://s.click.aliexpress.com/e/_EIxEHNc",
    "image": "images/7000-btu-efficient-portable-small-room-f-1795077523043.jpg",
    "desc": ""
  },
  {
    "name": "Self-Adhesive Desk Tidy Management Clips Cable Protector Silicone Magnetic Cable Organizer For Mouse Headset Wire Storage Winder",
    "category": "Car",
    "price": "$9.86",
    "link": "https://s.click.aliexpress.com/e/_EuL4P2Q",
    "image": "images/self-adhesive-desk-tidy-management-clips-1795077551787.jpg",
    "desc": ""
  },
  {
    "name": "HOMEFISH 50cm Monitor Light Bar USB Desk Lamp",
    "category": "Gaming",
    "price": "$28.95",
    "link": "https://s.click.aliexpress.com/e/_EQNVDYK",
    "image": "images/homefish-50cm-monitor-light-bar-usb-desk-1795075964074.jpg",
    "desc": ""
  },
  {
    "name": "New Posture Corrector For Men&Women-Adjustable Upper Back Brace For Clavicle Support and Pain Relief From neck,Back&Shoulder",
    "category": "Wearables",
    "price": "$10.32",
    "link": "https://s.click.aliexpress.com/e/_EJ05U8I",
    "image": "images/new-posture-corrector-for-men-women-adju-1795075921437.jpg",
    "desc": ""
  },
  {
    "name": "2026 Hot-selling Real-time Translation Headphones Wireless Headphones Noise Reduction Waterproof Smart Touch Earplugs for Children",
    "category": "Gifts",
    "price": "$27.71",
    "link": "https://s.click.aliexpress.com/e/_EzFtLae",
    "image": "images/2026-hot-selling-real-time-translation-h-1795075834786.jpg",
    "desc": ""
  },
  {
    "name": "Magnetic desktop foldable phone holder",
    "category": "Office",
    "price": "$27.14",
    "link": "https://s.click.aliexpress.com/e/_Ex5HCUI",
    "image": "images/magnetic-desktop-foldable-phone-holder-1795073783657.jpg",
    "desc": "Holds phone firmly"
  },
  {
    "name": "Mini USB Printer",
    "category": "Office",
    "price": "$58.03",
    "link": "https://s.click.aliexpress.com/e/_EI3hl6e",
    "image": "images/mini-usb-printer-1795040911913.jpg",
    "desc": "200/300 dpi Portable A4 Thermal Printer Compatible Laptops and Phones Printing PDF Text Script Mini USB Bluetooth Contract Print"
  }
];
