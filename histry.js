document.addEventListener("DOMContentLoaded", () => {
    // --- 1. MODAL SYSTEM SETUP ---
    const modal = document.getElementById("global-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalBody = document.getElementById("modal-body");
    const closeBtn = document.querySelector(".close-btn");

    function openModal(title, htmlContent) {
        modalTitle.innerText = title;
        modalBody.innerHTML = htmlContent;
        modal.style.display = "flex"; // Show the modal
    }

    // Close modal when X is clicked or clicking outside the box
    closeBtn.onclick = () => { modal.style.display = "none"; }
    window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; }


    // --- 2. TIMELINE ERA LOGIC ---
    // Information databases for the popups
    const eraData = {
        "Spanish Era": "During the Spanish period, Pasig developed from an already thriving riverside settlement along the Pasig River into an important colonial town. Before Spanish arrival, it was part of the sphere of influence of Namayan and served as a key trade route. In 1571, Spanish forces led by Miguel López de Legazpi took control of the area and organized Pasig into a pueblo under colonial administration. Soon after, it became a center of Catholic evangelization, marked by the establishment of the Immaculate Conception Cathedral of Pasig, one of the earliest churches in the region. Throughout Spanish rule, Pasig grew into a productive agricultural community, supplying rice, fruits, and vegetables to nearby Manila, with the river continuing to serve as a vital transport and trade route. It also functioned as an administrative and religious hub for surrounding areas. By the 19th century, Pasig had become a well-established town with organized local governance, churches, and schools, although its people experienced the burdens of colonial policies such as forced labor and taxation.",
        "American Era": "During the American period (1898–1946), Pasig came under U.S. control after the Treaty of Paris (1898) and was incorporated into Rizal Province in 1901. The Americans introduced a more modern and secular government, established public schools with English as the medium of instruction, and improved infrastructure connecting Pasig to Manila. Although still largely agricultural, Pasig began to develop urban features. This period also included early conflict during the Philippine-American War, but overall it laid the foundation for the town’s modernization.",
        "Post-War Era": "During the post-war era (after 1946), Pasig began rebuilding from the destruction caused by World War II and gradually shifted from an agricultural town into a more urbanized community. As part of Rizal Province, it experienced population growth, expansion of residential areas, and the rise of small industries. Improved roads and its proximity to Manila helped boost trade and economic activity, while the Pasig River remained important for transport. By the late 20th century, especially after becoming part of Metro Manila in 1975, Pasig had developed into a key commercial and urban center, setting the stage for its growth into a modern city.",
        "Modern Era": "In the modern era, Pasig has transformed into a highly urbanized and economically significant city within Metro Manila. Officially becoming a city in 1994, it experienced rapid development, especially with the rise of business districts like Ortigas Center, which it shares with nearby cities. Pasig is now home to major companies, commercial establishments, and residential areas, making it a key hub for finance, trade, and employment. Despite modernization, the Pasig River remains historically important, with ongoing efforts to rehabilitate it. Today, Pasig continues to grow as a progressive city focused on urban development, governance reforms, and improving the quality of life for its residents."
    };

    const eraItems = document.querySelectorAll('.era-item');
    eraItems.forEach(item => {
        // Change cursor to pointer so users know it's clickable
        item.style.cursor = "pointer"; 
        
        item.addEventListener('click', () => {
            // Remove active dot from all items
            eraItems.forEach(el => el.classList.remove('active'));
            // Add active dot to the clicked item
            item.classList.add('active');
            
            // Get the title and open modal
            const title = item.querySelector('h3').innerText;
            const content = `<p>${eraData[title] || "More information coming soon."}</p>`;
            openModal(title, content);
        });
    });


    // --- 3. MAYOR VICO ACHIEVEMENTS LOGIC ---
    const achievementData = {
        "Good Governance": "Vico Sotto is recognized for his strong commitment to good governance, earning the International Anticorruption Champions Award (2021) from the U.S. Department of State for promoting transparency and fighting corruption, as well as being named in TIME100 Next (2025) for ethical, data-driven leadership and receiving local honors like “Local Chief Executive of the Year,” all of which highlight his reputation as a reform-oriented and accountable public official.",
        "Innovative Projects": "Vico Sotto has launched several innovative projects to modernize city governance, including digitalizing business permits and government transactions, integrating PasigPass with the national ID system for efficient resident services, implementing open data and transparency portals, and developing community-centered initiatives such as floating parks, improved waste management, traffic monitoring, and disaster response systems; these efforts, supported by partnerships with agencies like the Department of Science and Technology and recognized by awards like the Bloomberg Philanthropies Mayors Challenge, emphasize efficiency, accountability, and citizen participation",
        "Eco-Friendly": "Vico Sotto has supported several eco‑friendly initiatives in Pasig City, including the Community EcoHub recycling facility that processes organic and plastic waste into compost and eco‑bricks, advancing sustainable waste management and reducing pollution; a mobile liquid soap refill station pilot to cut single‑use plastic consumption; tree‑growing and environmental awareness activities under the Batang Bantay Kalikasan program that promote urban greening and stewardship; and the launch of a solar‑powered electric vehicle charging station to encourage low‑carbon transport, all of which contribute to a greener and more sustainable city.",
        "Social Services": "Vico Sotto has overseen a range of social service programs aimed at supporting vulnerable residents and improving quality of life. His administration has expanded the Local Senior Pension (LSP) to provide regular financial support to elderly citizens without other pension sources, reaching over 20,500 beneficiaries. The city’s Social Welfare Assistance Center (SWAC) offers centralized services including medical, burial, hospital, and disaster aid, as well as daycare support and outreach for street children and indigent populations. Pasig also recognizes families who graduate from the national Pantawid Pamilyang Pilipino Program (4Ps) with additional cash aid and continued support, helping them become more self‑sufficient. Other efforts include inclusive distribution of Pamaskong Handog food packs to all households, emergency support during disasters (hot meals, sleeping kits), and strengthened child welfare and adoption services in partnership with local organizations."
    };

    const achievementBtns = document.querySelectorAll('.achieve-circle-item .btn-solid');
    achievementBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Get the title from the h5 above the button
            const title = e.target.previousElementSibling.innerText;
            const content = `<p>${achievementData[title] || "More information coming soon."}</p>`;
            openModal(title, content);
        });
    });


    // --- 4. BARANGAY LOGIC ---
    // You can fill in the specific history and captains here!
    const barangayData = {
        "Maybunga": { history: "Maybunga, a barangay in Pasig City, Philippines, originated as a pre-colonial settlement named for its abundant betel nut palms. Established under Spanish rule in 1572 with San Antonio Abad as its patron, it later saw minor conflicts, American-era education and industries, and wartime guerrilla activity. Post-war industrialization and population growth transformed it into a mixed residential and commercial area, now highlighted by the protected Maybunga Rainforest Park.", 
            captain: "Capt. Arnold 'Barok' Alvarez" },
        "Santolan": { history: "Santolan, a barangay in Pasig City, Philippines, is named after the santol trees that once grew abundantly in the area. Established during the Spanish colonial era, its residents venerated Sto. Tomas de Villanueva, with a church first built in 1798. Santolan played roles in local leadership and resistance against colonial and wartime forces. Over time, it evolved from a rural settlement along the Marikina River into a densely populated urban neighborhood, now served by landmarks like the LRT‑2 Santolan station.", 
            captain: "Capt. Jose Gabriel Bayan" },
        "Bagong Ilog": { history: "Bagong Ilog in Pasig City, Metro Manila traces its history back to the 17th century when it was originally part of the larger Sumilang barrio. In 1745, a major flood created a new waterway that split the area from Sumilang, and this newly formed tributary was called “Bagong Ilog” (which literally means “new river” in Filipino), giving the place its name. Over time the community evolved from rural agricultural land into a vibrant urban barangay within Pasig City, with its own facilities, population growth, and local development.", 
            captain: "Capt. Ferdinand 'BING' Avis" },
        "Pineda": {history: "Pineda in Pasig City, Philippines, began as a small riverside settlement on the northern bank of the Pasig River, originally inhabited by a few families from across the river in Malapad‑na‑Bato; its name is believed to come from a Spanish official who once served the barrio during the Spanish colonial era. Under Spanish rule it remained a quiet settlement and, before the Philippine Revolution, became a refuge for rebels from nearby provinces. During the American period, many residents made a living by washing clothes and uniforms of American soldiers stationed at Fort McKinley (now Bonifacio Global City). Over time, Pineda evolved into a more developed barangay with schools, houses, and small industries, growing into the urban community it is today.", 
            captain: "Capt. Michael Publico"
        },
        "Kapitolyo": {history: "Kapitolyo history ans source Kapitolyo in Pasig City, Philippines began in the early 1950s as Capitol Subdivision, the first planned subdivision in Pasig developed by Ortigas & Co.; its name reflects this origin. Over time it was converted into a political unit called Barrio Kapitolyo under Republic Act 1245 in 1953, with its first election in 1956, and later became a barangay in 1974 when barrios nationwide were renamed under Presidential Decree 557. Originally a quiet residential area near the Rizal Provincial Capitol, it grew rapidly with commercial and industrial development, community institutions like a chapel founded in 1968, and later the Holy Family Parish established in 1976. Today Kapitolyo is a vibrant urban neighborhood known for both residential life and business activity.",
            captain: "Capt. Alex Torres"
        },
        "Bagong Katipunan": {history: "Bagong Katipunan, a small barangay in Pasig City, Philippines, was established on November 30, 1930 when residents of the nearby Barrio Santa Rosa were relocated due to planned land changes for the Rizal Provincial Capitol and flood control works. The settlers moved onto what was previously betel‑nut land, organized their community, and chose the name Bagong Katipunan (“New Katipunan”) to honor Andrés Bonifacio and the revolutionary Katipunan society because their founding day coincided with Bonifacio’s birth anniversary. Over time it grew from a modest rural settlement into an official barangay within Pasig City.",
            captain: "Capt. Jeronimo 'Ambo' R. Alba"
        },
        "Bambang": {history: "Bambang, a historic barangay in Pasig City, Metro Manila, traces its origins to the Spanish colonial period when it was already an established settlement and one of the early ecclesiastical visitas attached to the Pasig parish formed in 1572. Its name likely came from a misunderstanding between local workers and Spanish missionaries—locals replied “Nagbabambang ho kami” (“We are digging gutters”), and the Spaniards adopted Bambang as the place name—though some histories also link it to the term for riverbanks or irrigation channels important for early rice fields. Over time Bambang grew from a riverside agricultural community into a populated urban barangay, with its population increasing significantly in the 20th century and featuring local landmarks such as health and educational facilities and its annual fiesta honoring St. James and St. Philip.",
            captain: "Capt. Rodel Samaniego"
        },

        "Buting": {history: "Buting, a barangay in Pasig City, Metro Manila, Philippines, traces its name to a local legend about Butihin, a young and admired Chinese‑mestiza whose beauty and character made her beloved by early residents; after her early death she was buried where the community’s chapel stood, and the name Buthin eventually became Buting. Located in the southern part of Pasig near Makati and Pateros, it developed from a historic riverside settlement into a residential neighborhood with distinct puroks and its own community identity, anchored historically by the San Guillermo Parish church site where the original chapel once stood.",
            captain: " Capt. Marlon S. Servilion "
        },

        "Caniogan": {history: "Caniogan in Pasig City was originally known as “Niyugan” because of its once abundant coconut groves, which later led to its name evolving into Caniogan. It lies in the northern part of the city bordered by the Marikina River and neighboring barangays like San Miguel and Maybunga. Historically a semi‑urban community, its early residents celebrated Sta. Clara de Montefalco as their patron saint, and the local chapel was elevated to a parish in 1994 by Cardinal Sin. Caniogan grew as families such as the Mariano, Juangco, and Evangelista clans settled there, and over time it developed educational institutions and community landmarks, becoming one of Pasig’s larger barangays.",
            captain: "Capt. Bernard Perez "
        },

        "Kalawaan": {history: "Kalawaan began as a duck‑raising settlement in 1926 when families from Sta. Ana, Pateros moved along the Pasig River for more space to raise ducks after the waterways in Pateros became overcrowded with duck farms. Because the area was low‑lying and frequently flooded by waters from Laguna de Bay and the Pasig River, residents called it Kalawaan, derived from “lawa” meaning abundant water. Originally a sitio of San Joaquin, Kalawaan became a separate barrio on April 4, 1962, and later developed into a thriving residential community with its own elementary school, parish (Saint Martha), fiestas, and local institutions.",
            captain: "Capt.  Jess Gaviola"
        },

        "Dela Paz": {history: "Dela Paz in Pasig City, Philippines, began as a vast farmland and railway area where the old Daang Riles (railroad) once ran, linking Montalban, Cainta, and Pasig; when the trains stopped operating and tracks became dilapidated, people built houses along that road and the area gradually filled with settlers. As subdivisions grew and the population increased, the community separated from Santolan and Manggahan, and in 1968 it became an official barangay through a petition approved by the Municipal Council of Pasig and the Rizal Provincial Board. Its name comes from the patroness Nuestra Señora de la Paz (Our Lady of Peace), reflecting the religious devotion of its residents, and the area later saw streets like Daang Riles renamed as Florencio Mariano Avenue as local development expanded.",
            captain: "Capt. Dietmar 'Akaw' Romualdez"
        },

        "Kapasigan": {history: "Kapasigan in Pasig City, Philippines, gets its name from the Tagalog word “pasigan” meaning river edge or shore, reflecting its original location along the Pasig River where early residents lived and worked. Historically, it included the sitios of Sta. Elena, San Isidro, and Wawa before Wawa became part of what is now San Jose. For many years Kapasigan was part of the central poblacion (town center) of Pasig, serving as a commercial and civic heart of the municipality, with traditional activities like markets, local businesses (including the long‑standing Dimas‑alang bakery), and community traditions tied to its riverine heritage. Over time it evolved into a busy urban barangay with residential, commercial, and civic functions at the core of old Pasig.",
            captain: "Capt. Analyn Batulio"
        },

        "Malinao": {history: "Malinao in Pasig City, Philippines, is one of the city’s oldest barangays and its name comes from the Tagalog word “malinao” meaning clear — either referring to the settlement’s clear sightlines after bamboo groves were cut down, or to the clear water from wells that early residents preferred to fetch compared with other areas. Located at the heart of old Pasig, Malinao has long been a central community with landmarks like the Immaculate Conception Cathedral (the city’s main church) and historical institutions such as the Colegio del Buen Consejo, originally the Beaterio de Sta. Rita established in the 18th century. Over time it developed from a bamboo‑covered area into a populated urban barangay with schools, civic facilities, and commercial activity, with a barangay hall established in 1990.",
            captain: "Capt.  Joel Dela Cruz"
        },

        "Manggahan": {history: "Manggahan in Pasig City, Philippines was originally part of Sitio Talampas of Barrio Rosario, known for its abundant mango trees that lined the roads—hence the name Manggahan (“place of mangoes”). It was created as a separate barrio in 1959 by municipal resolution, and in its early days consisted of a small farming community of about 60 people, predominantly devoted Catholics who venerated Nuestra Señora de Sta. Lucia, whose image was reportedly found near the Marikina River and housed in a simple chapel. Over time Manggahan grew into a populous and progressive barangay with schools and thriving business establishments.",
            captain: "Quin “Kin” Cruz"
        },

        "Oranbo": {history: "Oranbo in Pasig City, Philippines began as a sparsely populated part of the Ortigas Estate and only grew into a distinct community after the Rizal Provincial Capitol Building was erected on land donated by Ortigas & Company under Rizal Governor Sixto Antonio with engineer Mariano Bondoc supervising the development. In 1953, residents coined the name Oranbo from parts of the names ORtigas, ANtonio, and BOndoc to honor those instrumental in its establishment. From a quiet barrio it developed into a thriving community with growing homes, businesses, and commercial activity; today it is a recognized barangay near Ortigas Center and includes developments like Capitol Commons and the PhilSports Complex.",
            captain: "Capt. Richie M. Pua"
        },

        "Palatiw": {history: "Palatiw, a barangay in Pasig City, Philippines, is one of the oldest settlements in the area, dating back to the early Spanish period when it was originally called Palatia. It was among the first four barangays of Pasig granted in 1571 by Miguel López de Legazpi to his lieutenant Don Juan de Isla, and later became part of the Pasig parish established in 1572. Historical records show it as an early visita (mission area), indicating its importance in the town’s formation. Over time, Palatiw developed from a small colonial settlement into a populated urban barangay while maintaining traditions such as the feast of San Agustin.",
            captain: "Capt. Eriberto 'Bobot' Guevarra"
        },

        "Pinagbuhatan": {history: "Pinagbuhatan, a barangay in Pasig City, Philippines, is historically significant as the original site where the Augustinian missionaries first established the town of Pasig in 1572, building the first chapel and holding the first Mass in the area. However, due to frequent flooding, the center of the settlement was later moved to higher ground (now Malinao), and the former site became known as Pinagbuhatan, meaning “place of origin.” Over time, it developed from this early religious and colonial center into the largest and most populous barangay in Pasig, with strong religious traditions centered on San Sebastian, its patron saint.",
            captain: "Capt.  Robin Salandanan"
        },

        "Rosario": {history: "Rosario, a barangay in Pasig City, Philippines, traces its origins to the Spanish colonial period when it was named after Nuestra Señora del Rosario (Our Lady of the Rosary), reflecting the strong Catholic influence of early missionaries. It was once a large rural area composed of farms and small settlements and later became an important transit point connecting Pasig to nearby towns like Marikina and Cainta. Over time, Rosario developed into a major residential and commercial hub, especially with the growth of markets, transport terminals, and subdivisions, making it one of the busiest barangays in eastern Pasig today.",
            captain: "Capt. Aquilino 'Ely' Dela Cruz, Sr."
        },

        "San Antonio": {history: "San Antonio, a barangay in Pasig City, Philippines, developed from part of the former Ortigas Estate and was named after Saint Anthony (San Antonio de Padua), reflecting the Catholic influence in the area. It grew significantly in the mid-20th century as residential subdivisions and commercial establishments expanded, especially with its proximity to Ortigas Center, one of Metro Manila’s major business districts. Over time, San Antonio evolved from a quiet residential community into a highly urbanized barangay with offices, schools, and businesses, becoming one of Pasig’s key economic areas.",
            captain: "Capt. Thomas Raymond U. Lising"   
        },

        "San Joaquin": {history: "San Joaquin, a barangay in Pasig City, Philippines, dates back to the Spanish colonial period and was named after Saint Joachim (San Joaquin), reflecting early Catholic influence in the community. It developed as a riverside settlement along the Pasig River, where residents relied on farming, fishing, and small trade. Over time, San Joaquin became known for its strong religious traditions, especially the annual Caracol Festival, a thanksgiving celebration rooted in prayers for protection from floods and disasters. Today, it has grown into a densely populated urban barangay while preserving its cultural heritage.",
            captain: "Capt. Ronwaldo Angeles"
        },

        "San Jose": {history: "San Jose, a barangay in Pasig City, Philippines, originated during the Spanish colonial period and was named after Saint Joseph (San Jose), reflecting the strong Catholic influence in early communities. It developed from a small rural settlement near the Pasig River, where residents relied on farming, fishing, and local trade. Over time, population growth and urban expansion transformed San Jose into a residential and commercial barangay, while maintaining religious traditions centered on its patron saint.",
            captain: "Capt. N/A"
        },

        "San Miguel": {history: "San Miguel, a barangay in Pasig City, Philippines, dates back to the Spanish colonial period and was named after Saint Michael the Archangel (San Miguel), reflecting early Catholic influence. It developed as a riverside agricultural community along the Marikina River, where residents depended on farming and fishing for livelihood. Over time, with population growth and urbanization, San Miguel transformed into a residential and commercial area while preserving its religious traditions and community identity.",
            captain: "Capt. Amoidi SiRick"
        },

        "San Nicolas": {history: "San Nicolas, a barangay in Pasig City, Philippines, dates back to the Spanish colonial period and was named after Saint Nicholas (San Nicolas), reflecting the strong Catholic influence of early missionaries. It developed as a small riverside community along the Pasig River, where residents depended on farming, fishing, and trade. Over time, it evolved into a residential and commercial area as Pasig urbanized, while maintaining traditions centered on its patron saint.",
            captain: "Capt. Rigor Enriquez"
        },

        "Santa Cruz": {history: "Santa Cruz, a barangay in Pasig City, Philippines, dates back to the Spanish colonial period and was named after the Holy Cross (Santa Cruz), reflecting strong Catholic influence. It developed as a riverside settlement along the Pasig River, where early residents relied on farming, fishing, and small trade. Over time, as Pasig urbanized, Santa Cruz grew into a residential and commercial barangay while preserving its religious traditions and community identity.",
            captain: "Capt. N/A"
        },

        "Santa Lucia": {history: "Santa Lucia, a barangay in Pasig City, Philippines, traces its roots to the Spanish colonial period and was named after Saint Lucy (Santa Lucia), reflecting early Catholic influence. It began as a rural settlement near the Marikina River, where residents relied on farming and fishing. Over time, it developed into a more urbanized area and became an important residential and commercial hub, especially with the growth of nearby transport routes and establishments like the Santa Lucia area along Marcos Highway.",
            captain: "Capt. Popoy Bunag"
        },

        "Santa Rosa": {history: "Santa Rosa, a barangay in Pasig City, Philippines, originated during the Spanish colonial period and was named after Saint Rose of Lima (Santa Rosa), reflecting the strong Catholic influence in early settlements. It developed as a riverside agricultural community along the Pasig River, where residents relied on farming, fishing, and small trade. Over time, Santa Rosa evolved into a residential and commercial barangay, with local schools, churches, and markets shaping its community life.",
            captain: "Capt.  Ramir Calicdan"
        },

        "Santo Tomas": {history: "Santo Tomas, a barangay in Pasig City, Philippines, dates back to the Spanish colonial era and was named after Saint Thomas (Santo Tomas), reflecting the Catholic influence of early missionaries. Originally a riverside settlement along the Marikina River, its residents engaged in farming, fishing, and small-scale trade. Over time, Santo Tomas developed into a residential and commercial barangay, with schools, local businesses, and religious traditions centered on its patron saint shaping community life.",
            captain: "Capt. Eya Lati Raymundo"
        },

        "Sumilang": {history: "Barangay Sumilang in Pasig City, Metro Manila originated from settlers who moved from the nearby Sta. Rosa area due to frequent flooding and erosion. Early residents purchased land from a sugar‑cane plantation to establish the community with the support of local leaders and priests. Its name, “Sumilang,” reflects a Filipino nationalist phrase symbolizing justice, light, and freedom. The barangay developed distinct traditions such as its April fiesta, devotional practices during Lent, and communal visits with neighboring areas. Historically, Sumilang existed as a barrio of Pasig by the early 20th century and has since grown into a well-established urban community.",
            captain: "Capt. Irma R. Gomez "
        },

        "Ugong": {history: "Barangay Sumilang in Pasig originated from an earlier community called Sta. Rosa, where residents lived near river systems that supported trade and transport during the late 18th and early 19th centuries. Due to infrastructure developments like the tramway and environmental factors such as flooding, many families relocated to a nearby area that later became Sumilang. The land, once a sugarcane plantation, was acquired and divided among settlers, forming a new organized community. The name “Sumilang” is commonly linked to a patriotic phrase emphasizing light, justice, and freedom, reflected in local street names, although a folk explanation suggests it refers to a place where children were born. By the early 20th century, Sumilang was already recognized as a barrio of Pasig, and today it remains a historically rooted barangay shaped by migration, colonial influence, and local tradition",
            captain: "Capt. Gloria P. Cruz"
        },

        // Fallback for barangays not yet added to the dictionary:
        "default": { history: "One of the vibrant and essential communities making up the diverse City of Pasig.", captain: "To be updated" }
    };

    const barangayBtns = document.querySelectorAll('.barangay-card .btn-learn-more');
    barangayBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Find the h3 tag inside the same card to get the barangay name
            const cardInfo = e.target.closest('.barangay-info');
            const title = cardInfo.querySelector('h3').innerText;
            
            // Fetch data or use default if it's not in the dictionary yet
            const data = barangayData[title] || barangayData["default"];
            
            // Format how the pop-up looks for Barangays
            const content = `
                <p><strong>Brief History:</strong> ${data.history}</p>
                <h4>Barangay Captain:</h4>
                <p>${data.captain}</p>
            `;
            openModal(`Barangay ${title}`, content);
        });
    });
});