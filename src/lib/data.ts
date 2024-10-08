import bcrypt from "bcryptjs";

export const data = {
  users: [
    {
      name: "John",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Jane",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Samsung Galaxy A55 5G",
      brand: "Samsung",
      model: "Galaxy A55",
      category: "mobile",
      price: 43500,
      description:
        "Samsung Galaxy A35 5G.The phone comes with a 120 Hz refresh rate 6.60-inch touchscreen display offering a resolution of 2340×1080 pixels (FHD+). It comes with 8GB of RAM. The Samsung Galaxy A35 5G runs Android 14 and is powered by a 5000mAh non-removable battery. The Samsung Galaxy A35 5G supports proprietary fast charging. As far as the cameras are concerned, the Samsung Galaxy A35 5G on the rear packs a triple camera setup featuring a 50-megapixel primary camera; an 8-megapixel camera, and a 5-megapixel camera. It has a single front camera setup for selfies, featuring a 13-megapixel sensor. The Samsung Galaxy A35 5G runs One UI 6 is based on Android 14 and packs 128GB, 256GB of inbuilt storage that can be expanded via microSD card (up to 1000GB). The Samsung Galaxy A35 5G measures 161.70 x 78.00 x 8.20mm (height x width x thickness) and weighs 209.00 grams. It was launched in Awesome Iceblue, Awesome Navy, and Awesome Lilac colors. It features an IP67 rating for dust and water protection. It bears a metal body. Connectivity options on the Samsung Galaxy A35 5G include Wi-Fi, GPS, and USB Type-C. Sensors on the phone include an accelerometer, compass/ magnetometer, gyroscope, proximity sensor, and fingerprint sensor.",
      features: [
        "120 Hz refresh rate",
        "6.60-inch touchscreen display",
        "8GB RAM",
        "128GB Storage",
        "5G",
        "Android 14",
      ],
      colors: ["black", "white"],
      images: ["https://i.ibb.co/mDcYMCF/Samsung-Galaxy-A55-5-G.jpg"],
      rating: 5,
      numReviews: 4,
      countInStock: 3,
      variant: "8GB 128GB",
      isFlashSale: false,
      isFeatured: true,
      discount: 0,
    },
    {
      name: "Samsung Galaxy A35 5G",
      brand: "Samsung",
      model: "Galaxy A35",
      category: "mobile",
      price: 36500,
      description:
        "Samsung Galaxy A35 5G.The phone comes with a 120 Hz refresh rate 6.60-inch touchscreen display offering a resolution of 2340×1080 pixels (FHD+). It comes with 8GB of RAM. The Samsung Galaxy A35 5G runs Android 14 and is powered by a 5000mAh non-removable battery. The Samsung Galaxy A35 5G supports proprietary fast charging. As far as the cameras are concerned, the Samsung Galaxy A35 5G on the rear packs a triple camera setup featuring a 50-megapixel primary camera; an 8-megapixel camera, and a 5-megapixel camera. It has a single front camera setup for selfies, featuring a 13-megapixel sensor. The Samsung Galaxy A35 5G runs One UI 6 is based on Android 14 and packs 128GB, 256GB of inbuilt storage that can be expanded via microSD card (up to 1000GB). The Samsung Galaxy A35 5G measures 161.70 x 78.00 x 8.20mm (height x width x thickness) and weighs 209.00 grams. It was launched in Awesome Iceblue, Awesome Navy, and Awesome Lilac colors. It features an IP67 rating for dust and water protection. It bears a metal body. Connectivity options on the Samsung Galaxy A35 5G include Wi-Fi, GPS, and USB Type-C. Sensors on the phone include an accelerometer, compass/ magnetometer, gyroscope, proximity sensor, and fingerprint sensor.",
      features: [
        "120 Hz refresh rate",
        "6.60-inch touchscreen display",
        "8GB RAM",
        "128GB Storage",
        "5G",
        "Android 14",
      ],
      colors: ["black", "white"],
      images: ["https://i.ibb.co/F6Ff04T/Samsung-Galaxy-A35-5-G.jpg"],
      rating: 5,
      numReviews: 4,
      countInStock: 3,
      variant: "8GB 128GB",
      isFlashSale: true,
      isFeatured: false,
      discount: 10,
    },
    {
      name: "Samsung Galaxy S24+ 5G",
      brand: "Samsung",
      model: "Galaxy S24 Plus",
      category: "mobile",
      price: 103000,
      description:
        "Samsung Galaxy S24+ 5G. Elevate your work with the most epic Galaxy yet, featuring the game-changing power of Galaxy AI. From researching on the spot to capturing every detail of your projects day or night, unleash new ways to stay productive, collaborate and more.\nFeatures\nEpic, just like that Imagine the videos you’ll shoot, the pics you’ll edit and the connections you make, all elevated to new heights with mobile AI.\nUltimate upgrades\nMore screen. More battery. More processing power.7 Galaxy S24+ comes with QHD+, the highest screen resolution on a Galaxy smartphone.\nEpic for business, just like that Elevate your work with the most epic Galaxy yet, featuring the game-changing power of Galaxy AI. From researching on the spot to capturing every detail of your projects day or night, unleash new ways to stay productive, collaborate and more.\nMega megapixels\nSnap high-res pics that will look great for years to come, captured with a 50MP multi-camera system where each lens is a powerhouse. Bring your night into the light\nCapture the nighttime portraits you’ve been dreaming of with Nightography. Zoom in up to 3x and retain detail and vibrancy, even in low light.\nSuper HDR previews. Enhanced before you even snap.\nIn the Camera app’s preview window, a photo is taken. Then, the Gallery button is tapped to open the most recent photo in the Gallery. The share button is tapped. A photo is selected to be shared. Then, a social media app is selected. The photo appears in the social media app to be uploaded as a new post. The photo is then seen as an uploaded post in the app’s feed.\nSee a Super HDR preview before you even hit the shutter, and get the same show-stopping HDR quality in your Gallery and in your feed.\nGo bigger, go brighter\nThe 6.2″ FHD+ display on Galaxy S24 and the 6.7″ QHD+ display on Galaxy S24+ offer more screen real estate than ever before.11,24 Enjoy optimal color and contrast with Vision Booster, even on bright days.\nMust-haves at your fingertips\nCustomize your daily experience with widgets on your lock screen and Always On Display. From important reminders to your local air quality, get the info you need at a glance.\nChanges start from small steps We’re moving toward a sustainable future, step by step. We believe in building a sustainable journey through small changes that could make a big difference.",
      features: [
        "120 Hz refresh rate",
        "6.2-inch FHD+",
        "8GB RAM",
        "128GB Storage",
        "5G",
        "Android 14",
      ],
      colors: ["black", "white", "purple", "green", "gray"],
      images: ["https://i.ibb.co/TcrCfyG/Samsung-Galaxy-S24-5-G.jpg"],
      rating: 5,
      numReviews: 4,
      countInStock: 20,
      variant: "8GB 128GB, 8GB 256GB, 8GB 512GB",
      isFlashSale: false,
      isFeatured: true,
      discount: 0,
    },
    {
      name: "Samsung Galaxy A05 – Official",
      brand: "Samsung",
      model: "Galaxy A05",
      category: "mobile",
      price: 18000,
      description:
        "Samsung Galaxy A05. Cherish the photos you take with the powerful 50MP Main camera, the portraits taken with the 2MP Depth camera, and your favorite selfies with the 8MP Front camera. Images simulated for illustrative purposes. Depth Camera feature available for rear camera only.",
      features: ["50MP Camera", "4GB RAM", "64GB Storage", "4G", "Android 14"],
      colors: ["black"],
      images: ["https://i.ibb.co/vB6L1FT/Samsung-Galaxy-A05-2-768x768.jpg"],
      rating: 4,
      numReviews: 3,
      countInStock: 3,
      variant: "4GB 64GB",
      isFlashSale: false,
      isFeatured: true,
      discount: 20,
    },
    {
      name: "Google Pixel 8 Pro",
      brand: "Google Pixel",
      model: "Pixel",
      category: "mobile",
      price: 92990,
      description:
        "Google Pixel 8 Pro. The best of Google. Even more pro. With Google AI and the best Pixel Camera, it’s the most powerful, personal Pixel yet. 6.7″ Super Actua display. Pixel’s brightest ever. Fully upgraded cameras and never-before-seen editing. Scratch-resistant glass with polished aluminum frame and matte back glass.\nThe power and brains behind Pixel 8 Pro.The new Google Tensor G3 chip is custom-designed with Google AI for cutting-edge photo and video features and smarter ways to help throughout the day. And it makes Pixel 8 Pro super-fast and efficient.\nEveryday moments through a pro-level lens.\nThe updated Pixel 8 Pro camera system makes selfies sharper, close-ups closer, and photos and videos more stunning than ever.\n50 MP main camera for even more detail.\nThe upgraded large main sensor with an ƒ/1.65 aperture creates the best low-light photos and videos and 2x optical-quality zoom for the most stunning close-ups.\n48 MP ultrawide camera for improved Macro Focus.\nIt’s the highest resolution yet from Pixel’s ultrawide camera. Zoom in even closer with enhanced Macro Focus. And zoom out even farther for astrophotography.\n48 MP telephoto camera is Pixel’s best zoom ever. The dedicated 5x telephoto optical zoom provides the highest quality zoom on Pixel – and up to 30x with Super Res Zoom.\n10.5 MP front camera for your sharpest selfies yet.\nWith over 95° field of view, the new ultrawide camera has dedicated autofocus for the sharpest selfies ever on Pixel.\nEven more creative control. Even better photos.\nPro controls unlock advanced camera settings like shutter speed, ISO, and more.7 And they enable high-resolution images for richer detail.\nBetter low-light photos. It’s like night and day.\nThe Pixel 8 Pro camera delivers stunning photo quality from dusk until dawn with Night Sight and astrophotography.\nStunning comes standard.\nThe Pixel Camera records sharp, smooth video with rich color and clear audio, even in crowded, dimly lit places. Google AI applies noise reduction to boost video quality in any light.\nExpert video processing.\nDon’t worry about shaky or imperfect videos. Video Boost automatically adjusts color, lighting, stabilization, and graininess. And it enables Night Sight Video on Pixel 8 Pro.",
      features: [
        "120 Hz refresh rate",
        "50MP back camera",
        "10.5MP front camera",
        "8GB RAM",
        "128GB Storage",
        "5G",
        "Android 14",
      ],
      colors: ["black", "white"],
      images: ["https://i.ibb.co/mGPDb0V/Google-Pixel-8-Pro-Bay-2-768x768.jpg"],
      rating: 5,
      numReviews: 11,
      countInStock: 7,
      variant: "8GB 128GB",
      isFlashSale: false,
      isFeatured: true,
      discount: 0,
    },
    {
      name: "Google Pixel 8",
      brand: "Google Pixel",
      model: "Pixel",
      category: "mobile",
      price: 61500,
      description:
        "Google Pixel 8. The best of Google. Even more. With Google AI and the best Pixel Camera, it’s the most powerful, personal Pixel yet. 6.7″ Super Actua display. Pixel’s brightest ever. Fully upgraded cameras and never-before-seen editing. Scratch-resistant glass with polished aluminum frame and matte back glass.\nThe power and brains behind Pixel 8 Pro.The new Google Tensor G3 chip is custom-designed with Google AI for cutting-edge photo and video features and smarter ways to help throughout the day. And it makes Pixel 8 Pro super-fast and efficient.\nEveryday moments through a pro-level lens.\nThe updated Pixel 8 Pro camera system makes selfies sharper, close-ups closer, and photos and videos more stunning than ever.\n50 MP main camera for even more detail.\nThe upgraded large main sensor with an ƒ/1.65 aperture creates the best low-light photos and videos and 2x optical-quality zoom for the most stunning close-ups.\n48 MP ultrawide camera for improved Macro Focus.\nIt’s the highest resolution yet from Pixel’s ultrawide camera. Zoom in even closer with enhanced Macro Focus. And zoom out even farther for astrophotography.\n48 MP telephoto camera is Pixel’s best zoom ever. The dedicated 5x telephoto optical zoom provides the highest quality zoom on Pixel – and up to 30x with Super Res Zoom.\n10.5 MP front camera for your sharpest selfies yet.\nWith over 95° field of view, the new ultrawide camera has dedicated autofocus for the sharpest selfies ever on Pixel.\nEven more creative control. Even better photos.\nPro controls unlock advanced camera settings like shutter speed, ISO, and more.7 And they enable high-resolution images for richer detail.\nBetter low-light photos. It’s like night and day.\nThe Pixel 8 Pro camera delivers stunning photo quality from dusk until dawn with Night Sight and astrophotography.\nStunning comes standard.\nThe Pixel Camera records sharp, smooth video with rich color and clear audio, even in crowded, dimly lit places. Google AI applies noise reduction to boost video quality in any light.\nExpert video processing.\nDon’t worry about shaky or imperfect videos. Video Boost automatically adjusts color, lighting, stabilization, and graininess. And it enables Night Sight Video on Pixel 8 Pro.",
      features: [
        "120 Hz refresh rate",
        "50MP back camera",
        "10.5MP front camera",
        "8GB RAM",
        "128GB Storage",
        "5G",
        "Android 14",
      ],
      colors: ["black", "white"],
      images: ["https://i.ibb.co/26vd1Bv/Google-Pixel-8-Hazel-2-768x768.jpg"],
      rating: 5,
      numReviews: 11,
      countInStock: 7,
      variant: "8GB 128GB",
      isFlashSale: false,
      isFeatured: true,
      discount: 0,
    },
    {
      name: "Xiaomi Redmi Note 13 Pro 4G",
      brand: "Xiaomi",
      model: "Note 13 Pro",
      category: "mobile",
      price: 30800,
      description:
        "Xiaomi Redmi Note 13 Pro 4G. The phone comes with a 6.67-inch touchscreen display offering a resolution of 1080×2400 pixels and an aspect ratio of 20:9. Note 13 Pro comes with 8GB/12GB of RAM options. It runs Android 12 and is powered by a 5000mAh non-removable battery. It supports 67W Turbo Charge fast charging.\nAs far as the cameras are concerned, on the rear it packs a triple camera setup featuring a 200-megapixel primary camera; an 8-megapixel camera, and a 2-megapixel camera. It has a single front camera setup for selfies, featuring a 16-megapixel sensor.\nThe Redmi Note 13 Pro runs MIUI 13 is based on Android 12 and packs up to 512GB of inbuilt storage. The Note 13 Pro is a dual-SIM (GSM) mobile that accepts Nano-SIM. It measures 161.15 x 74.24 x 7.98mm (height x width x thickness) and weighs 188.00 grams. It was launched in Midnight Black, Forest Green and Lavender Purple colors.\nConnectivity options include Wi-Fi, GPS, Bluetooth v5.2, NFC, USB Type-C, 3G, and 4G. Sensors on the phone include an accelerometer, ambient light sensor, proximity sensor, and fingerprint sensor.",
      features: [
        "120 Hz refresh rate",
        "6.60-inch touchscreen display",
        "8GB RAM",
        "128GB Storage",
        "5G",
        "Android 14",
      ],
      colors: ["black", "white", "blue"],
      images: ["https://i.ibb.co/1frtrNL/Redmi-Note-13-Pro-4-G-1-768x768.jpg"],
      rating: 5,
      numReviews: 4,
      countInStock: 3,
      variant: "8GB 128GB",
      isFlashSale: false,
      isFeatured: true,
      discount: 0,
    },
    {
      name: "Xiaomi Redmi Note 13 4G – 8GB/256GB",
      brand: "Xiaomi",
      model: "Redmi Note 13",
      category: "mobile",
      price: 22490,
      description:
        "Xiaomi Redmi Note 13 4G. Featuring a 6.67″ screen with an ultra-slim bezel design, this beautiful display offers 100% DCI-P3 wide color gamut and 8-bit color depth delivering an immersive and captivating visual experience. With a 120Hz* refresh rate, Redmi Note 13 feels buttery smooth and super satisfying to use for everything, including scrolling socials and browsing the web.",
      features: [
        "120 Hz refresh rate",
        "6.60-inch touchscreen display",
        "8GB RAM",
        "128GB Storage",
        "5G",
        "Android 14",
      ],
      colors: ["black", "white"],
      images: ["https://i.ibb.co/YBPDZYN/Redmi-Note-13-4-G.jpg"],
      rating: 4.5,
      numReviews: 5,
      countInStock: 3,
      variant: "8GB 128GB",
      isFlashSale: true,
      isFeatured: false,
      discount: 10,
    },
    {
      name: "Xiaomi Poco C65",
      brand: "Xiaomi",
      model: "Poco C65",
      category: "mobile",
      price: 16000,
      description:
        "Xiaomi Poco C65. Equipped with a 6.74″ ultra-large HD+ display that is rarely seen on its peers, providing a stunning visual experience when watching videos and playing games.\nProduct Details\nProtect Your Eyes from Visual Fatigue\nExperience Comfortable Visuals\nThanks to both TÜV Low Blue Light certification (software solution) and TÜV Flicker-Free certification, you can enjoy watching the phone day or night without feeling as much visual fatigue.\nPortrait mode\nRear camera portrait speed has increased by 79%*, and night scene photography speed has increased by 19.5%*.\nMore Modes, More Excitement\nFront soft-light ring Level up your selfies\nThe front 8MP camera has an upgraded soft-light ring, allowing for dazzling selfies even in dark environments with this mode on.\nOcta-Core Processor\nSupreme Performance\nEnjoy a seamless and smooth experience with the octa-core processor. This superb chipset reaches a balance between strong performance and efficiency.\nUp to 16GB\nWith 8GB extended RAM*\nPOCO C65 comes with a choice of 6GB and 8GB configurations, with 8GB version expandable up to 16GB RAM thanks to memory extension technology for multitasking and running applications smoothly.*\nMassive 5000mAh (typ) battery\nMaximize your enjoyment and productivity with massive battery capacity to keep you engaged through an entire day and help you get the most out of each charge. Experience the convenience of 18W fast charging to rapidly recharge whenever necessary.",
      features: [
        "120 Hz refresh rate",
        "6.60-inch touchscreen display",
        "8GB RAM",
        "128GB Storage",
        "5G",
        "Android 14",
      ],
      colors: ["black"],
      images: ["https://i.ibb.co/XkXwczv/Xiaomi-Poco-C65-1.jpg"],
      rating: 5,
      numReviews: 4,
      countInStock: 3,
      variant: "8GB 128GB",
      isFlashSale: false,
      isFeatured: true,
      discount: 0,
    },
    {
      name: "Xiaomi Poco X6 5G",
      brand: "Xiaomi",
      model: "Poco X6",
      category: "mobile",
      price: 30700,
      description:
        "Xiaomi Poco X6 5G. The POCO X6 series features the latest flagship-level Flow AMOLED display. With the left and right bezel both of just 1.3mm and the bottom bezel of 2.27mm, you can immerse yourself like never before.\nProduct Details\nSmoother than Ever Before Snapdragon 7s Gen 2 4nm process\nThe Qualcomm Snapdragon 7 series octa-core processor is manufactured using an advanced 4nm chip process, for a fantastic leap in performance.\n13581mm² Cooling area\nThe huge heat dissipation area is composed of graphite and graphene for an upgraded heat dissipation performance that ensures the device’s long-lasting stability.\n2GB+512GB* Memory Extension 3.0\nWith the latest POCO X6 series, choose up to 12GB RAM + 512GB ROM. The ultra-fast read/write speed is complemented by the latest Dynamic RAM Expansion 3.0, which can be expanded to 12GB of virtual RAM for a total of 24GB* RAM during use, for an even smoother experience.\nPOCO Imaging Engine\nPowerful AI Algorithms Center\nComprehensive refactored camera architecture and integrated hardware and software create a new POCO image engine for amazing camera performance like never before.",
      features: [
        "120 Hz refresh rate",
        "6.60-inch touchscreen display",
        "8GB RAM",
        "128GB Storage",
        "5G",
        "Android 14",
      ],
      colors: ["black"],
      images: ["https://i.ibb.co/dPGgJL3/Xiaomi-Poco-X6-5-G.jpg"],
      rating: 4.5,
      numReviews: 4,
      countInStock: 3,
      variant: "8GB 128GB",
      isFlashSale: false,
      isFeatured: true,
      discount: 0,
    },
    {
      name: "Oppo Reno 11 Pro 5G",
      brand: "Oppo",
      model: "Reno 11 Pro",
      category: "mobile",
      price: 52000,
      description:
        "Oppo Reno 11 Pro 5G. Lightweight and zero compromise on amazing tech, this is true power to your pocket. Plus, the 3D shape of this phone fits in your grip for perfect comfort.\nProduct Details\n120Hz 3D Curved Screen\nA Screen to Engage Your Senses\nImmersive action flows seamlessly on-screen, lit up in over a billion different colors. The angle of the 3D curve brings the perfect balance between in-palm comfort and visual delight.\n32MP Telephoto Portrait Camera\nPrecious Moments in Studio Quality\nThe 2x professional composition makes you stand out from the crowd, whilst the flagship Sony IMX709 sensor and industry-leading high resolution deliver instant image excellence. Capture your most important moments in studio quality, creating an instant emotional connection.\nPortrait Expert Engine\nA Studio Crew in Your Pocket\nGlobal professional photographer aesthetics are built into our algorithms, so you feel like there’s a team of lighting and retouching experts in your phone, helping you take studio-quality pictures.\n80W SUPERVOOC Flash Charge and 4600mAh Large Battery\nSpeed Meets Staying Power\nDiscover a 4600mAh big battery that’s still “box fresh” after four years thanks to the Battery Heath Engine. Then enjoy fast charging that makes a serious dent in your battery deficit in just a few minutes.\nMediaTek Dimensity 8200\nEndless Power. Strong Performance. Guaranteed.\nSuper-fast, super smooth, super strong performance is assured with this flagship-level 5G8 chipset with industry-leading 4nm process.\nLarge RAM and ROM\nMove to Mega Memory\nLoads of working memory and storage are just the beginning, as you can borrow unused storage space to keep all your apps firing fluidly when your phone’s doing loads of things at once.",
      features: [
        "120 Hz refresh rate",
        "6.60-inch touchscreen display",
        "8GB RAM",
        "128GB Storage",
        "5G",
        "Android 14",
      ],
      colors: ["black"],
      images: ["https://i.ibb.co/r4tXSqx/Oppo-Reno-11-Pro-5-G.jpg"],
      rating: 5,
      numReviews: 4,
      countInStock: 3,
      variant: "8GB 128GB",
      isFlashSale: false,
      isFeatured: true,
      discount: 0,
    },
    {
      name: "Oppo A18 – 8GB/128GB",
      brand: "Oppo",
      model: "Oppo A",
      category: "mobile",
      price: 13000,
      description:
        "Oppo A18. The phone comes with a 90 Hz refresh rate 6.56-inch touchscreen display offering a resolution of 720×1612 pixels (HD+). Oppo A18 is powered by an octa-core MediaTek Helio G85 processor. It comes with 4GB of RAM. The Oppo A18 runs Android 13 and is powered by a 5000mAh battery.\nAs far as the cameras are concerned, the Oppo A18 on the rear packs a dual camera setup featuring an 8-megapixel primary camera, and a 2-megapixel camera. It has a single front camera setup for selfies, featuring an Unspecified sensor.\nThe Oppo A18 runs ColorOS 13.1 is based on Android 13 and packs 64GB, 128GB of inbuilt storage. It is a dual-SIM mobile. The Oppo A18 measures 163.74 x 75.03 x 8.16mm (height x width x thickness) and weighs 188.00 grams. It was launched in Glowing Black and Glowing Blue colors.\nConnectivity options on the Oppo A18 include Wi-Fi 802.11 a/b/g/n, Bluetooth v5.30, and USB Type-C. Sensors on the phone include an accelerometer, ambient light sensor, compass/ magnetometer, proximity sensor, and fingerprint sensor.",
      features: [
        "120 Hz refresh rate",
        "6.60-inch touchscreen display",
        "8GB RAM",
        "128GB Storage",
        "5G",
        "Android 14",
      ],
      colors: ["black", "white"],
      images: ["https://i.ibb.co/bP3465T/Oppo-A18.jpg"],
      rating: 5,
      numReviews: 4,
      countInStock: 3,
      variant: "8GB 128GB",
      isFlashSale: false,
      isFeatured: false,
      discount: 0,
    },
    {
      name: "Oppo Find X3 Pro – 12GB/256GB",
      brand: "Oppo",
      model: "Find X3 Pro",
      category: "mobile",
      price: 70900,
      description:
        "OPPO Find X3 Pro. ON Expand Your Field of Vision Find X3 Pro’s ultra-wide-angle lens has a 110.3° field of vision, avoiding compromise in image quality or distortion at the edges of the photograph — perfect for group shots or capturing landscapes in their full glory. OPPO used the personalized hue test to develop color compensation for Find X3 Pro, resulting in heightened color differentiation and recognition. Find X3 Pro’s color compensation technology allows those with Color Vision Deficiency (CVD) to see color-corrective hues and deeper contrast levels for color differentiation.",
      features: [
        "120 Hz refresh rate",
        "6.60-inch touchscreen display",
        "8GB RAM",
        "128GB Storage",
        "5G",
        "Android 14",
      ],
      colors: ["black"],
      images: ["https://i.ibb.co/hZkYwtd/OPPO-Find-X3-Pro.jpg"],
      rating: 4.7,
      numReviews: 4,
      countInStock: 3,
      variant: "8GB 128GB",
      isFlashSale: false,
      isFeatured: false,
      discount: 0,
    },
    {
      name: "Realme 12 Pro 5G",
      brand: "Realme",
      model: "12 Pro",
      category: "mobile",
      price: 36000,
      description:
        "Realme 12 Pro is a remarkable addition to the smartphone market, offering a blend of performance, style, and innovation. Launched on January 29, 2024, it has quickly become a sought-after device among tech enthusiasts. Here we will share the price in Bangladesh and full details.\nRealme 12 Pro Price in Bangladesh\nRealme 12 Pro expected price in Bangladesh is BDT 35,000, making it a competitive option in its segment.\nMost Highlighted Features of Realme 12 Pro\nCamera Excellence: With a triple camera setup including a 50 MP main sensor, the Realme 12 Pro captures stunning images. The telephoto lens with 2x optical zoom and an ultrawide lens add versatility.\nPerformance Powerhouse: Powered by the Snapdragon 6 Gen 1 chipset and 8GB RAM, it handles multitasking and gaming with ease.\nVivid Display: A 6.7-inch AMOLED screen with a 120Hz refresh rate offers a smooth and immersive viewing experience.\nFast Charging: The 5000mAh battery supports 67W fast charging, getting you back on the move quickly.\nRobust Build: An IP65 dust and water-resistant rating ensures durability for everyday challenges.",
      features: [
        "120 Hz refresh rate",
        "6.60-inch touchscreen display",
        "8GB RAM",
        "128GB Storage",
        "5G",
        "Android 14",
      ],
      colors: ["black"],
      images: ["https://i.ibb.co/c8v0mNY/Realme-12-Pro-5-G-768x768.jpg"],
      rating: 5,
      numReviews: 4,
      countInStock: 3,
      variant: "8GB 128GB",
      isFlashSale: false,
      isFeatured: true,
      discount: 0,
    },
    {
      name: "Realme Narzo 60 Pro 5G",
      brand: "Realme",
      model: "Narzo 60 Pro",
      category: "mobile",
      price: 32700,
      description:
        "Realme Narzo 60 Pro 5G. The phone comes with a 120 Hz refresh rate 6.70-inch touchscreen display offering a resolution of 2412×1080 pixels (FHD+). It is powered by an octa-core MediaTek Dimensity 7050 processor. It comes with 8GB, 12GB of RAM. The Realme Narzo 60 Pro 5G runs Android 13 and is powered by a 5000mAh non-removable battery. It supports 67W Turbo Charge fast charging.\nAs far as the cameras are concerned, the Realme Narzo 60 Pro 5G on the rear packs a dual camera setup featuring a 100-megapixel primary camera, and a 2-megapixel camera. It has a single front camera setup for selfies, featuring a 16-megapixel sensor.\nThe Realme Narzo runs Realme UI 4.0 is based on Android 13 and packs 128GB, 256GB, 1TB of inbuilt storage. The Realme Narzo 60 Pro 5G measures 161.60 x 73.90 x 8.20mm (height x width x thickness) and weighs 185.00 grams. It was launched in Cosmic Night. Martian Sunrise color.\nConnectivity options on the Realme Narzo 60 Pro 5G include Wi-Fi 802.11 a/b/n/ac/ax, GPS, Bluetooth v5.20, USB OTG, and USB Type-C. Sensors on the phone include an accelerometer, ambient light sensor, compass/ magnetometer, gyroscope, proximity sensor, and in-display fingerprint sensor.",
      features: [
        "120 Hz refresh rate",
        "6.60-inch touchscreen display",
        "8GB RAM",
        "128GB Storage",
        "5G",
        "Android 14",
      ],
      colors: ["black"],
      images: ["https://i.ibb.co/c8v0mNY/Realme-12-Pro-5-G-768x768.jpg"],
      rating: 5,
      numReviews: 4,
      countInStock: 3,
      variant: "8GB 128GB",
      isFlashSale: false,
      isFeatured: false,
      discount: 0,
    },
    {
      name: "Realme C53",
      brand: "Realme",
      model: "C53",
      category: "mobile",
      price: 14500,
      description:
        "Realme C53. The phone comes with a 90 Hz refresh rate 6.74-inch touchscreen display at a pixel density of 560 pixels per inch (ppi). It is powered by an octa-core processor. It comes with 4GB, 6GB of RAM. The Realme C53 runs Android 13 and is powered by a 5000mAh non-removable battery. It supports 33W Fast Charging fast charging.\nAs far as the cameras are concerned, the Realme C53 on the rear packs a 108-megapixel camera. It has a single front camera setup for selfies, featuring an 8-megapixel sensor.\nThe Realme C53 runs Realme UI T Edition is based on Android 13 and packs 64GB, 128GB of inbuilt storage that can be expanded via microSD card (up to 2000GB) with a dedicated slot. It is a dual-SIM mobile. The Realme C53 measures 167.20 x 76.70 x 7.99mm (height x width x thickness) and weighs 186.00 grams. It was launched in Champion Gold and Mighty Black colors.\nConnectivity options on the Realme C53 include Wi-Fi, GPS, Bluetooth v5.00, NFC, and USB Type-C. Sensors on the phone include an accelerometer, ambient light sensor, gyroscope, proximity sensor, and compass/ magnetometer.",
      features: [
        "120 Hz refresh rate",
        "6.60-inch touchscreen display",
        "8GB RAM",
        "128GB Storage",
        "5G",
        "Android 14",
      ],
      colors: ["black", "white"],
      images: ["https://i.ibb.co/CmfSTRq/Realme-C53.jpg"],
      rating: 5,
      numReviews: 4,
      countInStock: 3,
      variant: "4GB 128GB",
      isFlashSale: false,
      isFeatured: true,
      discount: 0,
    },
  ],
};
