/* ============================================================
   PCraft - Product Database
   Real components, prices in Toman (approx. market samples)
   ============================================================ */

const PRODUCTS = {
  case: [
    { id:'case-1', name:'Lian Li O11 Dynamic EVO', brand:'Lian Li', price:12500000, image:'https://placehold.co/400x400/0f1117/00e5ff?text=O11+EVO', formFactor:['ATX','Micro-ATX','Mini-ITX','E-ATX'], maxGpuLength:420, maxCoolerHeight:167, maxRadiator:360, stock:12, specs:{type:'Mid Tower', material:'Aluminum + Glass'} },
    { id:'case-2', name:'NZXT H7 Flow RGB', brand:'NZXT', price:9200000, image:'https://placehold.co/400x400/0f1117/a855f7?text=H7+Flow', formFactor:['ATX','Micro-ATX','Mini-ITX'], maxGpuLength:400, maxCoolerHeight:185, maxRadiator:360, stock:8, specs:{type:'Mid Tower', material:'Steel + Glass'} },
    { id:'case-3', name:'Corsair 4000D Airflow', brand:'Corsair', price:7200000, image:'https://placehold.co/400x400/0f1117/3b82f6?text=4000D', formFactor:['ATX','Micro-ATX','Mini-ITX'], maxGpuLength:360, maxCoolerHeight:170, maxRadiator:360, stock:15, specs:{type:'Mid Tower', material:'Steel'} },
    { id:'case-4', name:'Fractal Design Meshify 2 Compact', brand:'Fractal Design', price:9800000, image:'https://placehold.co/400x400/0f1117/22c55e?text=Meshify+2', formFactor:['ATX','Micro-ATX','Mini-ITX','E-ATX'], maxGpuLength:467, maxCoolerHeight:185, maxRadiator:420, stock:6, specs:{type:'Mid Tower', material:'Steel + Mesh'} },
    { id:'case-5', name:'Cooler Master NR200P Max', brand:'Cooler Master', price:14500000, image:'https://placehold.co/400x400/0f1117/f59e0b?text=NR200P', formFactor:['Mini-ITX'], maxGpuLength:330, maxCoolerHeight:155, maxRadiator:280, stock:4, specs:{type:'Mini-ITX', material:'Steel + Glass'} },
    { id:'case-6', name:'Lian Li Lancool 216 RGB', brand:'Lian Li', price:6800000, image:'https://placehold.co/400x400/0f1117/00e5ff?text=Lancool+216', formFactor:['ATX','Micro-ATX','Mini-ITX'], maxGpuLength:392, maxCoolerHeight:180, maxRadiator:360, stock:11, specs:{type:'Mid Tower', material:'Steel + Mesh'} },
    { id:'case-7', name:'Corsair iCUE 5000X RGB', brand:'Corsair', price:13800000, image:'https://placehold.co/400x400/0f1117/a855f7?text=5000X', formFactor:['ATX','Micro-ATX','Mini-ITX','E-ATX'], maxGpuLength:420, maxCoolerHeight:170, maxRadiator:360, stock:5, specs:{type:'Mid Tower', material:'Steel + Glass'} },
    { id:'case-8', name:'be quiet! Pure Base 500DX', brand:'be quiet!', price:7500000, image:'https://placehold.co/400x400/0f1117/3b82f6?text=Pure+Base', formFactor:['ATX','Micro-ATX','Mini-ITX'], maxGpuLength:369, maxCoolerHeight:190, maxRadiator:360, stock:9, specs:{type:'Mid Tower', material:'Steel'} },
    { id:'case-9', name:'Phanteks Eclipse G360A', brand:'Phanteks', price:6100000, image:'https://placehold.co/400x400/0f1117/22c55e?text=G360A', formFactor:['ATX','Micro-ATX','Mini-ITX'], maxGpuLength:400, maxCoolerHeight:160, maxRadiator:360, stock:14, specs:{type:'Mid Tower', material:'Steel + Mesh'} },
    { id:'case-10', name:'HYTE Y70 Touch', brand:'HYTE', price:18900000, image:'https://placehold.co/400x400/0f1117/f59e0b?text=Y70+Touch', formFactor:['ATX','Micro-ATX','Mini-ITX','E-ATX'], maxGpuLength:422, maxCoolerHeight:170, maxRadiator:360, stock:3, specs:{type:'Mid Tower', material:'Aluminum + Glass'} },
    { id:'case-11', name:'ASUS TUF Gaming GT302', brand:'ASUS', price:8500000, image:'https://placehold.co/400x400/0f1117/00e5ff?text=GT302', formFactor:['ATX','Micro-ATX','Mini-ITX'], maxGpuLength:400, maxCoolerHeight:165, maxRadiator:360, stock:7, specs:{type:'Mid Tower', material:'Steel + Mesh'} },
    { id:'case-12', name:'Thermaltake View 51 TG ARGB', brand:'Thermaltake', price:11200000, image:'https://placehold.co/400x400/0f1117/a855f7?text=View+51', formFactor:['ATX','Micro-ATX','Mini-ITX','E-ATX'], maxGpuLength:440, maxCoolerHeight:180, maxRadiator:420, stock:5, specs:{type:'Full Tower', material:'Steel + Glass'} }
  ],

  motherboard: [
    { id:'mb-1', name:'ASUS TUF Gaming B650-PLUS WIFI', brand:'ASUS', price:11500000, image:'https://placehold.co/400x400/0f1117/00e5ff?text=TUF+B650', socket:'AM5', chipset:'B650', formFactor:'ATX', ramType:'DDR5', ramSlots:4, maxRam:128, m2Slots:3, sataPorts:4, stock:10, specs:{wifi:true, bluetooth:true, vrm:'12+2'} },
    { id:'mb-2', name:'MSI MAG B650 TOMAHAWK WIFI', brand:'MSI', price:12800000, image:'https://placehold.co/400x400/0f1117/a855f7?text=Tomahawk', socket:'AM5', chipset:'B650', formFactor:'ATX', ramType:'DDR5', ramSlots:4, maxRam:128, m2Slots:3, sataPorts:4, stock:8, specs:{wifi:true, bluetooth:true, vrm:'14+2'} },
    { id:'mb-3', name:'Gigabyte B650 AORUS ELITE AX', brand:'Gigabyte', price:10900000, image:'https://placehold.co/400x400/0f1117/3b82f6?text=AORUS+B650', socket:'AM5', chipset:'B650', formFactor:'ATX', ramType:'DDR5', ramSlots:4, maxRam:128, m2Slots:3, sataPorts:4, stock:12, specs:{wifi:true, bluetooth:true, vrm:'12+2'} },
    { id:'mb-4', name:'ASUS ROG STRIX B650E-F GAMING WIFI', brand:'ASUS', price:15200000, image:'https://placehold.co/400x400/0f1117/ef4444?text=STRIX+B650E', socket:'AM5', chipset:'B650E', formFactor:'ATX', ramType:'DDR5', ramSlots:4, maxRam:192, m2Slots:4, sataPorts:4, stock:6, specs:{wifi:true, bluetooth:true, vrm:'16+2'} },
    { id:'mb-5', name:'MSI MPG B650 CARBON WIFI', brand:'MSI', price:14500000, image:'https://placehold.co/400x400/0f1117/22c55e?text=Carbon', socket:'AM5', chipset:'B650', formFactor:'ATX', ramType:'DDR5', ramSlots:4, maxRam:128, m2Slots:4, sataPorts:6, stock:5, specs:{wifi:true, bluetooth:true, vrm:'16+2'} },
    { id:'mb-6', name:'ASRock B650M Pro RS WiFi', brand:'ASRock', price:7800000, image:'https://placehold.co/400x400/0f1117/f59e0b?text=B650M+Pro', socket:'AM5', chipset:'B650', formFactor:'Micro-ATX', ramType:'DDR5', ramSlots:4, maxRam:128, m2Slots:2, sataPorts:4, stock:14, specs:{wifi:true, bluetooth:true, vrm:'8+2'} },
    { id:'mb-7', name:'ASUS ROG STRIX X670E-E GAMING WIFI', brand:'ASUS', price:22500000, image:'https://placehold.co/400x400/0f1117/00e5ff?text=X670E-E', socket:'AM5', chipset:'X670E', formFactor:'ATX', ramType:'DDR5', ramSlots:4, maxRam:192, m2Slots:5, sataPorts:6, stock:4, specs:{wifi:true, bluetooth:true, vrm:'18+2'} },
    { id:'mb-8', name:'Gigabyte X670E AORUS MASTER', brand:'Gigabyte', price:24800000, image:'https://placehold.co/400x400/0f1117/a855f7?text=X670E+Master', socket:'AM5', chipset:'X670E', formFactor:'ATX', ramType:'DDR5', ramSlots:4, maxRam:192, m2Slots:5, sataPorts:6, stock:3, specs:{wifi:true, bluetooth:true, vrm:'20+2'} },
    { id:'mb-9', name:'ASUS TUF Gaming B550-PLUS WIFI II', brand:'ASUS', price:6800000, image:'https://placehold.co/400x400/0f1117/3b82f6?text=TUF+B550', socket:'AM4', chipset:'B550', formFactor:'ATX', ramType:'DDR4', ramSlots:4, maxRam:128, m2Slots:2, sataPorts:4, stock:9, specs:{wifi:true, bluetooth:true, vrm:'12+2'} },
    { id:'mb-10', name:'MSI MAG B550 TOMAHAWK', brand:'MSI', price:7200000, image:'https://placehold.co/400x400/0f1117/22c55e?text=B550+Toma', socket:'AM4', chipset:'B550', formFactor:'ATX', ramType:'DDR4', ramSlots:4, maxRam:128, m2Slots:2, sataPorts:6, stock:7, specs:{wifi:false, bluetooth:false, vrm:'14+2'} },
    { id:'mb-11', name:'ASRock B550M Steel Legend', brand:'ASRock', price:5800000, image:'https://placehold.co/400x400/0f1117/f59e0b?text=Steel+Legend', socket:'AM4', chipset:'B550', formFactor:'Micro-ATX', ramType:'DDR4', ramSlots:4, maxRam:128, m2Slots:2, sataPorts:4, stock:11, specs:{wifi:false, bluetooth:false, vrm:'10+2'} },
    { id:'mb-12', name:'ASUS ROG STRIX Z790-E GAMING WIFI', brand:'ASUS', price:18500000, image:'https://placehold.co/400x400/0f1117/ef4444?text=Z790-E', socket:'LGA1700', chipset:'Z790', formFactor:'ATX', ramType:'DDR5', ramSlots:4, maxRam:192, m2Slots:5, sataPorts:6, stock:6, specs:{wifi:true, bluetooth:true, vrm:'18+1'} },
    { id:'mb-13', name:'MSI MPG Z790 CARBON WIFI', brand:'MSI', price:17200000, image:'https://placehold.co/400x400/0f1117/00e5ff?text=Z790+Carbon', socket:'LGA1700', chipset:'Z790', formFactor:'ATX', ramType:'DDR5', ramSlots:4, maxRam:192, m2Slots:5, sataPorts:6, stock:5, specs:{wifi:true, bluetooth:true, vrm:'19+1'} },
    { id:'mb-14', name:'Gigabyte Z790 AORUS ELITE AX', brand:'Gigabyte', price:14800000, image:'https://placehold.co/400x400/0f1117/a855f7?text=Z790+Elite', socket:'LGA1700', chipset:'Z790', formFactor:'ATX', ramType:'DDR5', ramSlots:4, maxRam:192, m2Slots:4, sataPorts:6, stock:8, specs:{wifi:true, bluetooth:true, vrm:'16+1'} },
    { id:'mb-15', name:'MSI PRO B760M-A WIFI', brand:'MSI', price:7200000, image:'https://placehold.co/400x400/0f1117/3b82f6?text=B760M', socket:'LGA1700', chipset:'B760', formFactor:'Micro-ATX', ramType:'DDR5', ramSlots:4, maxRam:128, m2Slots:2, sataPorts:4, stock:13, specs:{wifi:true, bluetooth:true, vrm:'12+1'} },
    { id:'mb-16', name:'ASUS PRIME B760-PLUS', brand:'ASUS', price:6900000, image:'https://placehold.co/400x400/0f1117/22c55e?text=PRIME+B760', socket:'LGA1700', chipset:'B760', formFactor:'ATX', ramType:'DDR5', ramSlots:4, maxRam:128, m2Slots:3, sataPorts:4, stock:10, specs:{wifi:false, bluetooth:false, vrm:'12+1'} },
    { id:'mb-17', name:'ASRock B760M PG Lightning', brand:'ASRock', price:5800000, image:'https://placehold.co/400x400/0f1117/f59e0b?text=B760M+PG', socket:'LGA1700', chipset:'B760', formFactor:'Micro-ATX', ramType:'DDR5', ramSlots:4, maxRam:128, m2Slots:2, sataPorts:4, stock:15, specs:{wifi:false, bluetooth:false, vrm:'8+1'} },
    { id:'mb-18', name:'ASUS ROG MAXIMUS Z790 HERO', brand:'ASUS', price:28500000, image:'https://placehold.co/400x400/0f1117/ef4444?text=Maximus+Hero', socket:'LGA1700', chipset:'Z790', formFactor:'ATX', ramType:'DDR5', ramSlots:4, maxRam:192, m2Slots:5, sataPorts:6, stock:2, specs:{wifi:true, bluetooth:true, vrm:'20+1'} },
    { id:'mb-19', name:'Gigabyte B650I AORUS ULTRA', brand:'Gigabyte', price:13500000, image:'https://placehold.co/400x400/0f1117/00e5ff?text=B650I', socket:'AM5', chipset:'B650', formFactor:'Mini-ITX', ramType:'DDR5', ramSlots:2, maxRam:96, m2Slots:2, sataPorts:4, stock:4, specs:{wifi:true, bluetooth:true, vrm:'8+2'} },
    { id:'mb-20', name:'MSI MEG X670E ACE', brand:'MSI', price:26800000, image:'https://placehold.co/400x400/0f1117/a855f7?text=X670E+ACE', socket:'AM5', chipset:'X670E', formFactor:'ATX', ramType:'DDR5', ramSlots:4, maxRam:192, m2Slots:5, sataPorts:6, stock:2, specs:{wifi:true, bluetooth:true, vrm:'24+2'} }
  ],

  cpu: [
    { id:'cpu-1', name:'AMD Ryzen 7 7800X3D', brand:'AMD', price:18500000, image:'https://placehold.co/400x400/0f1117/00e5ff?text=7800X3D', socket:'AM5', cores:8, threads:16, baseClock:'4.2', boostClock:'5.0', tdp:120, gamingScore:98, stock:7, specs:{cache:'96MB L3', arch:'Zen 4'} },
    { id:'cpu-2', name:'AMD Ryzen 5 7600X', brand:'AMD', price:9800000, image:'https://placehold.co/400x400/0f1117/a855f7?text=7600X', socket:'AM5', cores:6, threads:12, baseClock:'4.7', boostClock:'5.3', tdp:105, gamingScore:88, stock:12, specs:{cache:'32MB L3', arch:'Zen 4'} },
    { id:'cpu-3', name:'AMD Ryzen 9 7950X', brand:'AMD', price:24500000, image:'https://placehold.co/400x400/0f1117/3b82f6?text=7950X', socket:'AM5', cores:16, threads:32, baseClock:'4.5', boostClock:'5.7', tdp:170, gamingScore:92, stock:5, specs:{cache:'64MB L3', arch:'Zen 4'} },
    { id:'cpu-4', name:'AMD Ryzen 9 7900X', brand:'AMD', price:19800000, image:'https://placehold.co/400x400/0f1117/22c55e?text=7900X', socket:'AM5', cores:12, threads:24, baseClock:'4.7', boostClock:'5.6', tdp:170, gamingScore:90, stock:6, specs:{cache:'64MB L3', arch:'Zen 4'} },
    { id:'cpu-5', name:'AMD Ryzen 5 7600', brand:'AMD', price:8200000, image:'https://placehold.co/400x400/0f1117/f59e0b?text=7600', socket:'AM5', cores:6, threads:12, baseClock:'3.8', boostClock:'5.1', tdp:65, gamingScore:85, stock:15, specs:{cache:'32MB L3', arch:'Zen 4'} },
    { id:'cpu-6', name:'AMD Ryzen 7 7700X', brand:'AMD', price:14200000, image:'https://placehold.co/400x400/0f1117/00e5ff?text=7700X', socket:'AM5', cores:8, threads:16, baseClock:'4.5', boostClock:'5.4', tdp:105, gamingScore:91, stock:9, specs:{cache:'32MB L3', arch:'Zen 4'} },
    { id:'cpu-7', name:'AMD Ryzen 9 7950X3D', brand:'AMD', price:28500000, image:'https://placehold.co/400x400/0f1117/a855f7?text=7950X3D', socket:'AM5', cores:16, threads:32, baseClock:'4.2', boostClock:'5.7', tdp:120, gamingScore:99, stock:3, specs:{cache:'128MB L3', arch:'Zen 4'} },
    { id:'cpu-8', name:'AMD Ryzen 5 5600X', brand:'AMD', price:6200000, image:'https://placehold.co/400x400/0f1117/3b82f6?text=5600X', socket:'AM4', cores:6, threads:12, baseClock:'3.7', boostClock:'4.6', tdp:65, gamingScore:78, stock:18, specs:{cache:'32MB L3', arch:'Zen 3'} },
    { id:'cpu-9', name:'AMD Ryzen 7 5800X3D', brand:'AMD', price:12500000, image:'https://placehold.co/400x400/0f1117/22c55e?text=5800X3D', socket:'AM4', cores:8, threads:16, baseClock:'3.4', boostClock:'4.5', tdp:105, gamingScore:94, stock:8, specs:{cache:'96MB L3', arch:'Zen 3'} },
    { id:'cpu-10', name:'AMD Ryzen 7 5700X', brand:'AMD', price:7800000, image:'https://placehold.co/400x400/0f1117/f59e0b?text=5700X', socket:'AM4', cores:8, threads:16, baseClock:'3.4', boostClock:'4.6', tdp:65, gamingScore:82, stock:11, specs:{cache:'32MB L3', arch:'Zen 3'} },
    { id:'cpu-11', name:'Intel Core i7-14700K', brand:'Intel', price:16800000, image:'https://placehold.co/400x400/0f1117/ef4444?text=i7-14700K', socket:'LGA1700', cores:20, threads:28, baseClock:'3.4', boostClock:'5.6', tdp:125, gamingScore:93, stock:7, specs:{cache:'33MB', arch:'Raptor Lake R'} },
    { id:'cpu-12', name:'Intel Core i5-14600K', brand:'Intel', price:11200000, image:'https://placehold.co/400x400/0f1117/00e5ff?text=i5-14600K', socket:'LGA1700', cores:14, threads:20, baseClock:'3.5', boostClock:'5.3', tdp:125, gamingScore:89, stock:10, specs:{cache:'24MB', arch:'Raptor Lake R'} },
    { id:'cpu-13', name:'Intel Core i9-14900K', brand:'Intel', price:23500000, image:'https://placehold.co/400x400/0f1117/a855f7?text=i9-14900K', socket:'LGA1700', cores:24, threads:32, baseClock:'3.2', boostClock:'6.0', tdp:125, gamingScore:95, stock:4, specs:{cache:'36MB', arch:'Raptor Lake R'} },
    { id:'cpu-14', name:'Intel Core i5-13600K', brand:'Intel', price:9500000, image:'https://placehold.co/400x400/0f1117/3b82f6?text=i5-13600K', socket:'LGA1700', cores:14, threads:20, baseClock:'3.5', boostClock:'5.1', tdp:125, gamingScore:87, stock:9, specs:{cache:'24MB', arch:'Raptor Lake'} },
    { id:'cpu-15', name:'Intel Core i7-13700K', brand:'Intel', price:14500000, image:'https://placehold.co/400x400/0f1117/22c55e?text=i7-13700K', socket:'LGA1700', cores:16, threads:24, baseClock:'3.4', boostClock:'5.4', tdp:125, gamingScore:91, stock:6, specs:{cache:'30MB', arch:'Raptor Lake'} },
    { id:'cpu-16', name:'Intel Core i3-14100', brand:'Intel', price:5800000, image:'https://placehold.co/400x400/0f1117/f59e0b?text=i3-14100', socket:'LGA1700', cores:4, threads:8, baseClock:'3.5', boostClock:'4.7', tdp:60, gamingScore:65, stock:20, specs:{cache:'12MB', arch:'Raptor Lake R'} },
    { id:'cpu-17', name:'AMD Ryzen 5 5500', brand:'AMD', price:4200000, image:'https://placehold.co/400x400/0f1117/00e5ff?text=5500', socket:'AM4', cores:6, threads:12, baseClock:'3.6', boostClock:'4.2', tdp:65, gamingScore:72, stock:22, specs:{cache:'16MB L3', arch:'Zen 3'} },
    { id:'cpu-18', name:'AMD Ryzen 9 5900X', brand:'AMD', price:13800000, image:'https://placehold.co/400x400/0f1117/a855f7?text=5900X', socket:'AM4', cores:12, threads:24, baseClock:'3.7', boostClock:'4.8', tdp:105, gamingScore:86, stock:5, specs:{cache:'64MB L3', arch:'Zen 3'} }
  ],

  gpu: [
    { id:'gpu-1', name:'NVIDIA GeForce RTX 4070 SUPER', brand:'NVIDIA', price:28500000, image:'https://placehold.co/400x400/0f1117/00e5ff?text=RTX+4070S', length:304, tdp:220, vram:'12GB GDDR6X', powerConnectors:['8-pin'], recommendedPsu:650, gamingScore:92, stock:8, specs:{cores:7168, boost:'2.48 GHz'} },
    { id:'gpu-2', name:'NVIDIA GeForce RTX 4080 SUPER', brand:'NVIDIA', price:48500000, image:'https://placehold.co/400x400/0f1117/a855f7?text=RTX+4080S', length:310, tdp:320, vram:'16GB GDDR6X', powerConnectors:['16-pin'], recommendedPsu:750, gamingScore:98, stock:4, specs:{cores:10240, boost:'2.55 GHz'} },
    { id:'gpu-3', name:'AMD Radeon RX 7800 XT', brand:'AMD', price:24500000, image:'https://placehold.co/400x400/0f1117/3b82f6?text=RX+7800XT', length:287, tdp:263, vram:'16GB GDDR6', powerConnectors:['8-pin','8-pin'], recommendedPsu:700, gamingScore:90, stock:7, specs:{cores:3840, boost:'2.43 GHz'} },
    { id:'gpu-4', name:'NVIDIA GeForce RTX 4060 Ti 16GB', brand:'NVIDIA', price:19500000, image:'https://placehold.co/400x400/0f1117/22c55e?text=4060Ti+16G', length:244, tdp:165, vram:'16GB GDDR6', powerConnectors:['8-pin'], recommendedPsu:550, gamingScore:82, stock:11, specs:{cores:4352, boost:'2.54 GHz'} },
    { id:'gpu-5', name:'AMD Radeon RX 7600', brand:'AMD', price:12800000, image:'https://placehold.co/400x400/0f1117/f59e0b?text=RX+7600', length:204, tdp:165, vram:'8GB GDDR6', powerConnectors:['8-pin'], recommendedPsu:550, gamingScore:75, stock:14, specs:{cores:2048, boost:'2.65 GHz'} },
    { id:'gpu-6', name:'NVIDIA GeForce RTX 4090', brand:'NVIDIA', price:78500000, image:'https://placehold.co/400x400/0f1117/ef4444?text=RTX+4090', length:336, tdp:450, vram:'24GB GDDR6X', powerConnectors:['16-pin'], recommendedPsu:850, gamingScore:100, stock:2, specs:{cores:16384, boost:'2.52 GHz'} },
    { id:'gpu-7', name:'NVIDIA GeForce RTX 4070 Ti SUPER', brand:'NVIDIA', price:36500000, image:'https://placehold.co/400x400/0f1117/00e5ff?text=4070TiS', length:305, tdp:285, vram:'16GB GDDR6X', powerConnectors:['16-pin'], recommendedPsu:700, gamingScore:95, stock:5, specs:{cores:8448, boost:'2.61 GHz'} },
    { id:'gpu-8', name:'AMD Radeon RX 7900 XTX', brand:'AMD', price:42500000, image:'https://placehold.co/400x400/0f1117/a855f7?text=7900XTX', length:287, tdp:355, vram:'24GB GDDR6', powerConnectors:['8-pin','8-pin'], recommendedPsu:800, gamingScore:97, stock:3, specs:{cores:6144, boost:'2.5 GHz'} },
    { id:'gpu-9', name:'AMD Radeon RX 7900 XT', brand:'AMD', price:34800000, image:'https://placehold.co/400x400/0f1117/3b82f6?text=7900XT', length:276, tdp:300, vram:'20GB GDDR6', powerConnectors:['8-pin','8-pin'], recommendedPsu:750, gamingScore:94, stock:4, specs:{cores:5376, boost:'2.4 GHz'} },
    { id:'gpu-10', name:'NVIDIA GeForce RTX 4060', brand:'NVIDIA', price:13500000, image:'https://placehold.co/400x400/0f1117/22c55e?text=RTX+4060', length:242, tdp:115, vram:'8GB GDDR6', powerConnectors:['8-pin'], recommendedPsu:550, gamingScore:72, stock:16, specs:{cores:3072, boost:'2.46 GHz'} },
    { id:'gpu-11', name:'AMD Radeon RX 7700 XT', brand:'AMD', price:19800000, image:'https://placehold.co/400x400/0f1117/f59e0b?text=RX+7700XT', length:267, tdp:245, vram:'12GB GDDR6', powerConnectors:['8-pin','8-pin'], recommendedPsu:700, gamingScore:86, stock:8, specs:{cores:3456, boost:'2.54 GHz'} },
    { id:'gpu-12', name:'NVIDIA GeForce RTX 4080', brand:'NVIDIA', price:52000000, image:'https://placehold.co/400x400/0f1117/ef4444?text=RTX+4080', length:310, tdp:320, vram:'16GB GDDR6X', powerConnectors:['16-pin'], recommendedPsu:750, gamingScore:97, stock:3, specs:{cores:9728, boost:'2.51 GHz'} },
    { id:'gpu-13', name:'ASUS Dual RTX 4060 Ti OC', brand:'ASUS', price:17800000, image:'https://placehold.co/400x400/0f1117/00e5ff?text=Dual+4060Ti', length:227, tdp:160, vram:'8GB GDDR6', powerConnectors:['8-pin'], recommendedPsu:550, gamingScore:80, stock:9, specs:{cores:4352, boost:'2.59 GHz'} },
    { id:'gpu-14', name:'MSI Gaming X Slim RTX 4070', brand:'MSI', price:26800000, image:'https://placehold.co/400x400/0f1117/a855f7?text=Gaming+X', length:307, tdp:200, vram:'12GB GDDR6X', powerConnectors:['8-pin'], recommendedPsu:650, gamingScore:90, stock:6, specs:{cores:5888, boost:'2.55 GHz'} },
    { id:'gpu-15', name:'Sapphire Pulse RX 7800 XT', brand:'Sapphire', price:23800000, image:'https://placehold.co/400x400/0f1117/3b82f6?text=Pulse+7800', length:280, tdp:263, vram:'16GB GDDR6', powerConnectors:['8-pin','8-pin'], recommendedPsu:700, gamingScore:89, stock:7, specs:{cores:3840, boost:'2.43 GHz'} }
  ],

  ram: [
    { id:'ram-1', name:'Corsair Vengeance RGB 32GB (2x16) DDR5-6000', brand:'Corsair', price:8500000, image:'https://placehold.co/400x400/0f1117/00e5ff?text=DDR5-6000', type:'DDR5', capacity:32, speed:6000, modules:2, stock:15, specs:{latency:'CL30', rgb:true} },
    { id:'ram-2', name:'G.Skill Trident Z5 RGB 32GB (2x16) DDR5-6400', brand:'G.Skill', price:9200000, image:'https://placehold.co/400x400/0f1117/a855f7?text=Trident+Z5', type:'DDR5', capacity:32, speed:6400, modules:2, stock:10, specs:{latency:'CL32', rgb:true} },
    { id:'ram-3', name:'Kingston Fury Beast 16GB (2x8) DDR5-5600', brand:'Kingston', price:4800000, image:'https://placehold.co/400x400/0f1117/3b82f6?text=Fury+Beast', type:'DDR5', capacity:16, speed:5600, modules:2, stock:20, specs:{latency:'CL36', rgb:false} },
    { id:'ram-4', name:'Corsair Vengeance LPX 32GB (2x16) DDR4-3600', brand:'Corsair', price:4200000, image:'https://placehold.co/400x400/0f1117/22c55e?text=DDR4-3600', type:'DDR4', capacity:32, speed:3600, modules:2, stock:18, specs:{latency:'CL18', rgb:false} },
    { id:'ram-5', name:'TeamGroup T-Force Delta RGB 32GB DDR5-6000', brand:'TeamGroup', price:7800000, image:'https://placehold.co/400x400/0f1117/f59e0b?text=T-Force', type:'DDR5', capacity:32, speed:6000, modules:2, stock:12, specs:{latency:'CL30', rgb:true} },
    { id:'ram-6', name:'G.Skill Ripjaws S5 32GB (2x16) DDR5-6000', brand:'G.Skill', price:7200000, image:'https://placehold.co/400x400/0f1117/00e5ff?text=Ripjaws+S5', type:'DDR5', capacity:32, speed:6000, modules:2, stock:14, specs:{latency:'CL30', rgb:false} },
    { id:'ram-7', name:'Corsair Dominator Platinum RGB 64GB DDR5-6000', brand:'Corsair', price:18500000, image:'https://placehold.co/400x400/0f1117/a855f7?text=Dominator', type:'DDR5', capacity:64, speed:6000, modules:2, stock:4, specs:{latency:'CL30', rgb:true} },
    { id:'ram-8', name:'Kingston Fury Renegade 32GB DDR5-6400', brand:'Kingston', price:8900000, image:'https://placehold.co/400x400/0f1117/3b82f6?text=Renegade', type:'DDR5', capacity:32, speed:6400, modules:2, stock:8, specs:{latency:'CL32', rgb:false} },
    { id:'ram-9', name:'G.Skill Trident Z Neo 32GB DDR4-3600', brand:'G.Skill', price:4500000, image:'https://placehold.co/400x400/0f1117/22c55e?text=Trident+Neo', type:'DDR4', capacity:32, speed:3600, modules:2, stock:11, specs:{latency:'CL16', rgb:true} },
    { id:'ram-10', name:'Crucial Pro 32GB (2x16) DDR5-5600', brand:'Crucial', price:6500000, image:'https://placehold.co/400x400/0f1117/00e5ff?text=Crucial+Pro', type:'DDR5', capacity:32, speed:5600, modules:2, stock:16, specs:{latency:'CL46', rgb:false} },
    { id:'ram-11', name:'ADATA XPG Lancer RGB 32GB DDR5-6000', brand:'ADATA', price:7600000, image:'https://placehold.co/400x400/0f1117/a855f7?text=XPG+Lancer', type:'DDR5', capacity:32, speed:6000, modules:2, stock:9, specs:{latency:'CL30', rgb:true} },
    { id:'ram-12', name:'Patriot Viper Venom 16GB DDR5-5200', brand:'Patriot', price:3800000, image:'https://placehold.co/400x400/0f1117/3b82f6?text=Viper', type:'DDR5', capacity:16, speed:5200, modules:2, stock:22, specs:{latency:'CL40', rgb:false} }
  ],

  storage: [
    { id:'ssd-1', name:'Samsung 990 PRO 2TB NVMe', brand:'Samsung', price:8500000, image:'https://placehold.co/400x400/0f1117/00e5ff?text=990+PRO', type:'NVMe', interface:'PCIe 4.0', capacity:2000, form:'M.2', stock:12, specs:{read:'7450 MB/s', write:'6900 MB/s'} },
    { id:'ssd-2', name:'WD Black SN850X 1TB NVMe', brand:'Western Digital', price:5200000, image:'https://placehold.co/400x400/0f1117/a855f7?text=SN850X', type:'NVMe', interface:'PCIe 4.0', capacity:1000, form:'M.2', stock:15, specs:{read:'7300 MB/s', write:'6300 MB/s'} },
    { id:'ssd-3', name:'Crucial T700 2TB NVMe Gen5', brand:'Crucial', price:12500000, image:'https://placehold.co/400x400/0f1117/3b82f6?text=T700', type:'NVMe', interface:'PCIe 5.0', capacity:2000, form:'M.2', stock:6, specs:{read:'12400 MB/s', write:'11800 MB/s'} },
    { id:'ssd-4', name:'Samsung 870 EVO 1TB SATA', brand:'Samsung', price:3200000, image:'https://placehold.co/400x400/0f1117/22c55e?text=870+EVO', type:'SATA', interface:'SATA III', capacity:1000, form:'2.5"', stock:20, specs:{read:'560 MB/s', write:'530 MB/s'} },
    { id:'ssd-5', name:'Seagate Barracuda 4TB HDD', brand:'Seagate', price:3800000, image:'https://placehold.co/400x400/0f1117/f59e0b?text=Barracuda', type:'HDD', interface:'SATA III', capacity:4000, form:'3.5"', stock:18, specs:{rpm:5400, cache:'256MB'} },
    { id:'ssd-6', name:'Samsung 990 PRO 1TB NVMe', brand:'Samsung', price:5200000, image:'https://placehold.co/400x400/0f1117/00e5ff?text=990+PRO+1T', type:'NVMe', interface:'PCIe 4.0', capacity:1000, form:'M.2', stock:14, specs:{read:'7450 MB/s', write:'6900 MB/s'} },
    { id:'ssd-7', name:'WD Black SN770 2TB NVMe', brand:'Western Digital', price:6800000, image:'https://placehold.co/400x400/0f1117/a855f7?text=SN770', type:'NVMe', interface:'PCIe 4.0', capacity:2000, form:'M.2', stock:10, specs:{read:'5150 MB/s', write:'4850 MB/s'} },
    { id:'ssd-8', name:'Kingston KC3000 2TB NVMe', brand:'Kingston', price:7200000, image:'https://placehold.co/400x400/0f1117/3b82f6?text=KC3000', type:'NVMe', interface:'PCIe 4.0', capacity:2000, form:'M.2', stock:9, specs:{read:'7000 MB/s', write:'7000 MB/s'} },
    { id:'ssd-9', name:'Crucial T500 1TB NVMe', brand:'Crucial', price:4500000, image:'https://placehold.co/400x400/0f1117/22c55e?text=T500', type:'NVMe', interface:'PCIe 4.0', capacity:1000, form:'M.2', stock:13, specs:{read:'7400 MB/s', write:'7000 MB/s'} },
    { id:'ssd-10', name:'Samsung 980 PRO 2TB NVMe', brand:'Samsung', price:7800000, image:'https://placehold.co/400x400/0f1117/f59e0b?text=980+PRO', type:'NVMe', interface:'PCIe 4.0', capacity:2000, form:'M.2', stock:8, specs:{read:'7000 MB/s', write:'6900 MB/s'} },
    { id:'ssd-11', name:'Seagate FireCuda 530 2TB', brand:'Seagate', price:9200000, image:'https://placehold.co/400x400/0f1117/00e5ff?text=FireCuda', type:'NVMe', interface:'PCIe 4.0', capacity:2000, form:'M.2', stock:5, specs:{read:'7300 MB/s', write:'6900 MB/s'} },
    { id:'ssd-12', name:'WD Red SA500 2TB SATA', brand:'Western Digital', price:4800000, image:'https://placehold.co/400x400/0f1117/a855f7?text=Red+SA500', type:'SATA', interface:'SATA III', capacity:2000, form:'2.5"', stock:11, specs:{read:'560 MB/s', write:'530 MB/s'} },
    { id:'ssd-13', name:'Toshiba P300 2TB HDD', brand:'Toshiba', price:2800000, image:'https://placehold.co/400x400/0f1117/3b82f6?text=P300', type:'HDD', interface:'SATA III', capacity:2000, form:'3.5"', stock:25, specs:{rpm:7200, cache:'64MB'} },
    { id:'ssd-14', name:'ADATA Legend 960 2TB Gen4', brand:'ADATA', price:6200000, image:'https://placehold.co/400x400/0f1117/22c55e?text=Legend+960', type:'NVMe', interface:'PCIe 4.0', capacity:2000, form:'M.2', stock:10, specs:{read:'7400 MB/s', write:'6800 MB/s'} },
    { id:'ssd-15', name:'Sabrent Rocket 4 Plus 4TB', brand:'Sabrent', price:16500000, image:'https://placehold.co/400x400/0f1117/f59e0b?text=Rocket+4', type:'NVMe', interface:'PCIe 4.0', capacity:4000, form:'M.2', stock:3, specs:{read:'7100 MB/s', write:'6600 MB/s'} }
  ],

  psu: [
    { id:'psu-1', name:'Corsair RM850x 850W 80+ Gold', brand:'Corsair', price:7200000, image:'https://placehold.co/400x400/0f1117/00e5ff?text=RM850x', wattage:850, efficiency:'80+ Gold', modular:'Fully Modular', connectors:{pcie8:4, pcie16:1, eps:2}, stock:10, specs:{warranty:'10 years'} },
    { id:'psu-2', name:'Seasonic Focus GX-750 750W 80+ Gold', brand:'Seasonic', price:6500000, image:'https://placehold.co/400x400/0f1117/a855f7?text=Focus+GX', wattage:750, efficiency:'80+ Gold', modular:'Fully Modular', connectors:{pcie8:4, pcie16:0, eps:2}, stock:12, specs:{warranty:'10 years'} },
    { id:'psu-3', name:'be quiet! Straight Power 12 1000W', brand:'be quiet!', price:9800000, image:'https://placehold.co/400x400/0f1117/3b82f6?text=Straight+12', wattage:1000, efficiency:'80+ Platinum', modular:'Fully Modular', connectors:{pcie8:6, pcie16:1, eps:2}, stock:6, specs:{warranty:'10 years'} },
    { id:'psu-4', name:'Cooler Master MWE Gold 650W V2', brand:'Cooler Master', price:4200000, image:'https://placehold.co/400x400/0f1117/22c55e?text=MWE+650', wattage:650, efficiency:'80+ Gold', modular:'Semi Modular', connectors:{pcie8:2, pcie16:0, eps:1}, stock:18, specs:{warranty:'5 years'} },
    { id:'psu-5', name:'ASUS ROG Thor 1200W 80+ Platinum', brand:'ASUS', price:14500000, image:'https://placehold.co/400x400/0f1117/f59e0b?text=ROG+Thor', wattage:1200, efficiency:'80+ Platinum', modular:'Fully Modular', connectors:{pcie8:8, pcie16:1, eps:2}, stock:3, specs:{warranty:'10 years', oled:true} },
    { id:'psu-6', name:'Corsair RM1000x 1000W 80+ Gold', brand:'Corsair', price:9500000, image:'https://placehold.co/400x400/0f1117/00e5ff?text=RM1000x', wattage:1000, efficiency:'80+ Gold', modular:'Fully Modular', connectors:{pcie8:6, pcie16:1, eps:2}, stock:7, specs:{warranty:'10 years'} },
    { id:'psu-7', name:'Seasonic Prime TX-850 850W Titanium', brand:'Seasonic', price:12500000, image:'https://placehold.co/400x400/0f1117/a855f7?text=Prime+TX', wattage:850, efficiency:'80+ Titanium', modular:'Fully Modular', connectors:{pcie8:4, pcie16:1, eps:2}, stock:4, specs:{warranty:'12 years'} },
    { id:'psu-8', name:'EVGA SuperNOVA 850 G6', brand:'EVGA', price:6800000, image:'https://placehold.co/400x400/0f1117/3b82f6?text=SuperNOVA', wattage:850, efficiency:'80+ Gold', modular:'Fully Modular', connectors:{pcie8:4, pcie16:0, eps:2}, stock:9, specs:{warranty:'10 years'} },
    { id:'psu-9', name:'be quiet! Pure Power 12 M 750W', brand:'be quiet!', price:5800000, image:'https://placehold.co/400x400/0f1117/22c55e?text=Pure+Power', wattage:750, efficiency:'80+ Gold', modular:'Fully Modular', connectors:{pcie8:4, pcie16:0, eps:2}, stock:11, specs:{warranty:'10 years'} },
    { id:'psu-10', name:'Corsair CX650M 650W 80+ Bronze', brand:'Corsair', price:3500000, image:'https://placehold.co/400x400/0f1117/f59e0b?text=CX650M', wattage:650, efficiency:'80+ Bronze', modular:'Semi Modular', connectors:{pcie8:2, pcie16:0, eps:1}, stock:20, specs:{warranty:'5 years'} },
    { id:'psu-11', name:'Thermaltake Toughpower GF3 850W', brand:'Thermaltake', price:7800000, image:'https://placehold.co/400x400/0f1117/00e5ff?text=GF3+850', wattage:850, efficiency:'80+ Gold', modular:'Fully Modular', connectors:{pcie8:4, pcie16:1, eps:2}, stock:8, specs:{warranty:'10 years'} },
    { id:'psu-12', name:'MSI MPG A850G PCIE5', brand:'MSI', price:8200000, image:'https://placehold.co/400x400/0f1117/a855f7?text=A850G', wattage:850, efficiency:'80+ Gold', modular:'Fully Modular', connectors:{pcie8:4, pcie16:1, eps:2}, stock:7, specs:{warranty:'10 years'} },
    { id:'psu-13', name:'ASUS TUF Gaming 750W Gold', brand:'ASUS', price:5500000, image:'https://placehold.co/400x400/0f1117/3b82f6?text=TUF+750', wattage:750, efficiency:'80+ Gold', modular:'Fully Modular', connectors:{pcie8:4, pcie16:0, eps:2}, stock:10, specs:{warranty:'10 years'} },
    { id:'psu-14', name:'Cooler Master V850 SFX Gold', brand:'Cooler Master', price:8900000, image:'https://placehold.co/400x400/0f1117/22c55e?text=V850+SFX', wattage:850, efficiency:'80+ Gold', modular:'Fully Modular', connectors:{pcie8:4, pcie16:1, eps:2}, stock:5, specs:{warranty:'10 years', form:'SFX'} },
    { id:'psu-15', name:'Seasonic Focus GX-1000 1000W', brand:'Seasonic', price:9800000, image:'https://placehold.co/400x400/0f1117/f59e0b?text=Focus+1000', wattage:1000, efficiency:'80+ Gold', modular:'Fully Modular', connectors:{pcie8:6, pcie16:1, eps:2}, stock:6, specs:{warranty:'10 years'} }
  ],

  cooler: [
    { id:'cooler-1', name:'Noctua NH-D15 chromax.black', brand:'Noctua', price:5800000, image:'https://placehold.co/400x400/0f1117/00e5ff?text=NH-D15', type:'Air', height:165, sockets:['AM5','AM4','LGA1700','LGA1200'], tdpSupport:250, stock:8, specs:{fans:'2x 140mm'} },
    { id:'cooler-2', name:'Corsair iCUE H150i Elite Capellix', brand:'Corsair', price:8900000, image:'https://placehold.co/400x400/0f1117/a855f7?text=H150i', type:'AIO', height:0, radiator:360, sockets:['AM5','AM4','LGA1700','LGA1200'], tdpSupport:300, stock:6, specs:{fans:'3x 120mm RGB'} },
    { id:'cooler-3', name:'be quiet! Dark Rock Pro 4', brand:'be quiet!', price:4500000, image:'https://placehold.co/400x400/0f1117/3b82f6?text=Dark+Rock', type:'Air', height:163, sockets:['AM5','AM4','LGA1700','LGA1200'], tdpSupport:250, stock:10, specs:{fans:'2x 120mm'} },
    { id:'cooler-4', name:'Arctic Liquid Freezer II 280', brand:'Arctic', price:5200000, image:'https://placehold.co/400x400/0f1117/22c55e?text=Freezer+II', type:'AIO', height:0, radiator:280, sockets:['AM5','AM4','LGA1700','LGA1200'], tdpSupport:280, stock:12, specs:{fans:'2x 140mm'} },
    { id:'cooler-5', name:'Thermalright Peerless Assassin 120 SE', brand:'Thermalright', price:2100000, image:'https://placehold.co/400x400/0f1117/f59e0b?text=PA+120SE', type:'Air', height:155, sockets:['AM5','AM4','LGA1700'], tdpSupport:220, stock:25, specs:{fans:'2x 120mm'} },
    { id:'cooler-6', name:'Noctua NH-U12A', brand:'Noctua', price:4800000, image:'https://placehold.co/400x400/0f1117/00e5ff?text=NH-U12A', type:'Air', height:158, sockets:['AM5','AM4','LGA1700','LGA1200'], tdpSupport:220, stock:7, specs:{fans:'2x 120mm'} },
    { id:'cooler-7', name:'Corsair H100i RGB Pro XT', brand:'Corsair', price:6200000, image:'https://placehold.co/400x400/0f1117/a855f7?text=H100i', type:'AIO', height:0, radiator:240, sockets:['AM5','AM4','LGA1700','LGA1200'], tdpSupport:250, stock:9, specs:{fans:'2x 120mm RGB'} },
    { id:'cooler-8', name:'Deepcool AK620 Digital', brand:'Deepcool', price:3200000, image:'https://placehold.co/400x400/0f1117/3b82f6?text=AK620', type:'Air', height:160, sockets:['AM5','AM4','LGA1700'], tdpSupport:260, stock:14, specs:{fans:'2x 120mm', display:true} },
    { id:'cooler-9', name:'NZXT Kraken Elite 360 RGB', brand:'NZXT', price:9800000, image:'https://placehold.co/400x400/0f1117/22c55e?text=Kraken+360', type:'AIO', height:0, radiator:360, sockets:['AM5','AM4','LGA1700','LGA1200'], tdpSupport:320, stock:5, specs:{fans:'3x 120mm RGB', lcd:true} },
    { id:'cooler-10', name:'Thermalright Frost Commander 140', brand:'Thermalright', price:2800000, image:'https://placehold.co/400x400/0f1117/f59e0b?text=Frost+140', type:'Air', height:157, sockets:['AM5','AM4','LGA1700'], tdpSupport:250, stock:16, specs:{fans:'2x 140mm'} },
    { id:'cooler-11', name:'Arctic Liquid Freezer III 360', brand:'Arctic', price:6800000, image:'https://placehold.co/400x400/0f1117/00e5ff?text=Freezer+III', type:'AIO', height:0, radiator:360, sockets:['AM5','AM4','LGA1700'], tdpSupport:300, stock:8, specs:{fans:'3x 120mm'} },
    { id:'cooler-12', name:'be quiet! Pure Rock 2 FX', brand:'be quiet!', price:2500000, image:'https://placehold.co/400x400/0f1117/a855f7?text=Pure+Rock', type:'Air', height:155, sockets:['AM5','AM4','LGA1700'], tdpSupport:150, stock:18, specs:{fans:'1x 120mm RGB'} }
  ]
};

const CATEGORIES = [
  { id:'case', name:'کیس', icon:'🖥️' },
  { id:'cpu', name:'پردازنده', icon:'⚡' },
  { id:'gpu', name:'کارت گرافیک', icon:'🎮' },
  { id:'motherboard', name:'مادربرد', icon:'🔲' },
  { id:'ram', name:'رم', icon:'💾' },
  { id:'storage', name:'حافظه', icon:'📀' },
  { id:'psu', name:'پاور', icon:'🔌' },
  { id:'cooler', name:'خنک‌کننده', icon:'❄️' }
];

const BUILDER_STEPS = [
  { key:'case', label:'کیس', icon:'🖥️' },
  { key:'motherboard', label:'مادربرد', icon:'🔲' },
  { key:'cpu', label:'پردازنده', icon:'⚡' },
  { key:'gpu', label:'کارت گرافیک', icon:'🎮' },
  { key:'ram', label:'رم', icon:'💾' },
  { key:'storage', label:'حافظه', icon:'📀' },
  { key:'psu', label:'پاور', icon:'🔌' },
  { key:'cooler', label:'خنک‌کننده', icon:'❄️' }
];

function formatPrice(price) {
  return new Intl.NumberFormat('fa-IR').format(price) + ' تومان';
}

const AI_OPINIONS = {
  empty: 'هنوز هیچ قطعه‌ای انتخاب نکردی. از کیس شروع کن تا سیستم‌ت رو قدم‌به‌قدم بسازیم.',
  partial_low: 'شروع خوبی داشتی، ولی هنوز قطعات کلیدی کم داری. برای دیدن عملکرد واقعی حداقل مادربرد، CPU و GPU رو انتخاب کن.',
  balanced_mid: 'سیستم متعادلی در حال شکل‌گیریه. ترکیب فعلی برای گیمینگ ۱۰۸۰p و کارهای روزمره عالیه. اگر بودجه داری GPU یا رم قوی‌تر انتخاب کن.',
  gaming_high: 'این بیلد برای گیمینگ سنگین و رزولوشن ۱۴۴۰p / ۴K آماده‌ست. FPS بالا و تجربه‌ی روان در بازی‌های AAA انتظار می‌ره.',
  workstation: 'ترکیب هسته‌های زیاد و رم بالا این سیستم رو برای رندر، ادیت ویدیو و کارهای سنگین مناسب کرده.',
  bottleneck_cpu: 'کارت گرافیک قوی‌تری نسبت به پردازنده انتخاب کردی. ممکنه در بعضی بازی‌ها CPU گلوگاه بشه. ارتقای پردازنده رو در نظر بگیر.',
  bottleneck_gpu: 'پردازنده خیلی قوی‌تر از کارت گرافیکه. برای استفاده کامل از قدرت CPU، GPU قوی‌تری پیشنهاد می‌شه.',
  budget_friendly: 'بیلد اقتصادی و هوشمندانه. با این بودجه عملکرد قابل قبولی در ۱۰۸۰p می‌گیری.',
  overkill: 'این سیستم تقریباً بدون محدودیت کار می‌کنه. برای گیمینگ ۴K، استریم همزمان و کارهای حرفه‌ای ایده‌آله.',
  incomplete_psu: 'پاور هنوز انتخاب نشده یا توانش کمه. حتماً پاور مناسب با حاشیه ایمنی انتخاب کن تا پایداری سیستم حفظ بشه.',
  complete_excellent: 'تبریک! سیستم کامل و بهینه‌ای ساختی. تعادل قطعات عالیه و برای سال‌های آینده هم پاسخگو خواهد بود.'
};
