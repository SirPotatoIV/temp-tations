// script created to store a single reponse gotten from the food api
// -- created so that we don't burn through requests

const testResponse = {
    "data": {
      "q": "taco",
      "from": 0,
      "to": 10,
      "more": true,
      "count": 11950,
      "hits": [
        {
          "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_78920305364c0086ffca6bcd1def9014",
            "label": "Freezer Taco Kit recipes",
            "image": "https://www.edamam.com/web-img/0b2/0b2fbef28b18381df472d7499274839a",
            "source": "The Kitchn",
            "url": "http://www.thekitchn.com/recipe-freezer-taco-kits-freezer-friendly-recipes-from-the-kitchn-216435",
            "shareAs": "http://www.edamam.com/recipe/freezer-taco-kit-recipes-78920305364c0086ffca6bcd1def9014/taco",
            "yield": 4,
            "dietLabels": [],
            "healthLabels": [
              "Sugar-Conscious",
              "Peanut-Free",
              "Tree-Nut-Free",
              "Alcohol-Free"
            ],
            "cautions": [
              "Eggs",
              "Milk",
              "Sulfites",
              "FODMAP"
            ],
            "ingredientLines": [
              "1 pound lean ground beef, 90% lean/10% fat",
              "1 to 2 tablespoons taco seasoning, homemade or store-bought",
              "2 cups shredded cheese, such as Monterey Jack, Cheddar, or a blend",
              "12 taco-sized flour or corn tortillas*"
            ],
            "ingredients": [
              {
                "text": "1 pound lean ground beef, 90% lean/10% fat",
                "weight": 453.59237
              },
              {
                "text": "1 to 2 tablespoons taco seasoning, homemade or store-bought",
                "weight": 12.824999999132672
              },
              {
                "text": "2 cups shredded cheese, such as Monterey Jack, Cheddar, or a blend",
                "weight": 226
              },
              {
                "text": "12 taco-sized flour or corn tortillas*",
                "weight": 288
              }
            ],
            "calories": 2738.8211197972073,
            "totalWeight": 980.4173699991327,
            "totalTime": 45,
            "totalNutrients": {
              "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 2738.8211197972073,
                "unit": "kcal"
              },
              "FAT": {
                "label": "Fat",
                "quantity": 175.359674,
                "unit": "g"
              },
              "FASAT": {
                "label": "Saturated",
                "quantity": 79.46315756970002,
                "unit": "g"
              },
              "FATRN": {
                "label": "Trans",
                "quantity": 8.016929966000001,
                "unit": "g"
              },
              "FAMS": {
                "label": "Monounsaturated",
                "quantity": 61.174092897600005,
                "unit": "g"
              },
              "FAPU": {
                "label": "Polyunsaturated",
                "quantity": 9.6885162477,
                "unit": "g"
              },
              "CHOCDF": {
                "label": "Carbs",
                "quantity": 139.00749999949696,
                "unit": "g"
              },
              "FIBTG": {
                "label": "Fiber",
                "quantity": 19.849724999884643,
                "unit": "g"
              },
              "SUGAR": {
                "label": "Sugars",
                "quantity": 4.556147499906068,
                "unit": "g"
              },
              "PROCNT": {
                "label": "Protein",
                "quantity": 149.20533492896098,
                "unit": "g"
              },
              "CHOLE": {
                "label": "Cholesterol",
                "quantity": 552.5705827,
                "unit": "mg"
              },
              "NA": {
                "label": "Sodium",
                "quantity": 2808.1957141375265,
                "unit": "mg"
              },
              "CA": {
                "label": "Calcium",
                "quantity": 1840.4266266000002,
                "unit": "mg"
              },
              "MG": {
                "label": "Magnesium",
                "quantity": 345.4907029,
                "unit": "mg"
              },
              "K": {
                "label": "Potassium",
                "quantity": 2060.3893989913267,
                "unit": "mg"
              },
              "FE": {
                "label": "Iron",
                "quantity": 13.627091977937553,
                "unit": "mg"
              },
              "ZN": {
                "label": "Zinc",
                "quantity": 30.484761066,
                "unit": "mg"
              },
              "P": {
                "label": "Phosphorus",
                "quantity": 2689.9759446,
                "unit": "mg"
              },
              "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 612.5236948000002,
                "unit": "µg"
              },
              "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 0.5267847191,
                "unit": "mg"
              },
              "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 1.8529644787000001,
                "unit": "mg"
              },
              "NIA": {
                "label": "Niacin (B3)",
                "quantity": 23.575729479900005,
                "unit": "mg"
              },
              "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 2.2065633551,
                "unit": "mg"
              },
              "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 104.9114659,
                "unit": "µg"
              },
              "FOLFD": {
                "label": "Folate (food)",
                "quantity": 104.9114659,
                "unit": "µg"
              },
              "VITB12": {
                "label": "Vitamin B12",
                "quantity": 11.695676718000001,
                "unit": "µg"
              },
              "VITD": {
                "label": "Vitamin D",
                "quantity": 67.84777110000002,
                "unit": "IU"
              },
              "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 3.3403070290000003,
                "unit": "mg"
              },
              "VITK1": {
                "label": "Vitamin K",
                "quantity": 14.718662660000001,
                "unit": "µg"
              },
              "WATER": {
                "label": "Water",
                "quantity": 497.3778243189505,
                "unit": "g"
              }
            },
            "totalDaily": {
              "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 136.94105598986036,
                "unit": "%"
              },
              "FAT": {
                "label": "Fat",
                "quantity": 269.78411384615384,
                "unit": "%"
              },
              "FASAT": {
                "label": "Saturated",
                "quantity": 397.31578784850007,
                "unit": "%"
              },
              "CHOCDF": {
                "label": "Carbs",
                "quantity": 46.33583333316565,
                "unit": "%"
              },
              "FIBTG": {
                "label": "Fiber",
                "quantity": 79.39889999953857,
                "unit": "%"
              },
              "PROCNT": {
                "label": "Protein",
                "quantity": 298.41066985792196,
                "unit": "%"
              },
              "CHOLE": {
                "label": "Cholesterol",
                "quantity": 184.19019423333333,
                "unit": "%"
              },
              "NA": {
                "label": "Sodium",
                "quantity": 117.00815475573026,
                "unit": "%"
              },
              "CA": {
                "label": "Calcium",
                "quantity": 184.04266266000002,
                "unit": "%"
              },
              "MG": {
                "label": "Magnesium",
                "quantity": 82.25969116666666,
                "unit": "%"
              },
              "K": {
                "label": "Potassium",
                "quantity": 43.8380723189644,
                "unit": "%"
              },
              "FE": {
                "label": "Iron",
                "quantity": 75.70606654409751,
                "unit": "%"
              },
              "ZN": {
                "label": "Zinc",
                "quantity": 277.1341915090909,
                "unit": "%"
              },
              "P": {
                "label": "Phosphorus",
                "quantity": 384.2822778,
                "unit": "%"
              },
              "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 68.05818831111112,
                "unit": "%"
              },
              "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 43.898726591666666,
                "unit": "%"
              },
              "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 142.53572913076923,
                "unit": "%"
              },
              "NIA": {
                "label": "Niacin (B3)",
                "quantity": 147.34830924937503,
                "unit": "%"
              },
              "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 169.7356427,
                "unit": "%"
              },
              "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 26.227866475,
                "unit": "%"
              },
              "VITB12": {
                "label": "Vitamin B12",
                "quantity": 487.3198632500001,
                "unit": "%"
              },
              "VITD": {
                "label": "Vitamin D",
                "quantity": 452.3184740000001,
                "unit": "%"
              },
              "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 22.26871352666667,
                "unit": "%"
              },
              "VITK1": {
                "label": "Vitamin K",
                "quantity": 12.265552216666668,
                "unit": "%"
              }
            },
            "digest": [
              {
                "label": "Fat",
                "tag": "FAT",
                "schemaOrgTag": "fatContent",
                "total": 175.359674,
                "hasRDI": true,
                "daily": 269.78411384615384,
                "unit": "g",
                "sub": [
                  {
                    "label": "Saturated",
                    "tag": "FASAT",
                    "schemaOrgTag": "saturatedFatContent",
                    "total": 79.46315756970002,
                    "hasRDI": true,
                    "daily": 397.31578784850007,
                    "unit": "g"
                  },
                  {
                    "label": "Trans",
                    "tag": "FATRN",
                    "schemaOrgTag": "transFatContent",
                    "total": 8.016929966000001,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Monounsaturated",
                    "tag": "FAMS",
                    "schemaOrgTag": null,
                    "total": 61.174092897600005,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Polyunsaturated",
                    "tag": "FAPU",
                    "schemaOrgTag": null,
                    "total": 9.6885162477,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  }
                ]
              },
              {
                "label": "Carbs",
                "tag": "CHOCDF",
                "schemaOrgTag": "carbohydrateContent",
                "total": 139.00749999949696,
                "hasRDI": true,
                "daily": 46.33583333316565,
                "unit": "g",
                "sub": [
                  {
                    "label": "Carbs (net)",
                    "tag": "CHOCDF.net",
                    "schemaOrgTag": null,
                    "total": 119.15777499961231,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Fiber",
                    "tag": "FIBTG",
                    "schemaOrgTag": "fiberContent",
                    "total": 19.849724999884643,
                    "hasRDI": true,
                    "daily": 79.39889999953857,
                    "unit": "g"
                  },
                  {
                    "label": "Sugars",
                    "tag": "SUGAR",
                    "schemaOrgTag": "sugarContent",
                    "total": 4.556147499906068,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Sugars, added",
                    "tag": "SUGAR.added",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  }
                ]
              },
              {
                "label": "Protein",
                "tag": "PROCNT",
                "schemaOrgTag": "proteinContent",
                "total": 149.20533492896098,
                "hasRDI": true,
                "daily": 298.41066985792196,
                "unit": "g"
              },
              {
                "label": "Cholesterol",
                "tag": "CHOLE",
                "schemaOrgTag": "cholesterolContent",
                "total": 552.5705827,
                "hasRDI": true,
                "daily": 184.19019423333333,
                "unit": "mg"
              },
              {
                "label": "Sodium",
                "tag": "NA",
                "schemaOrgTag": "sodiumContent",
                "total": 2808.1957141375265,
                "hasRDI": true,
                "daily": 117.00815475573026,
                "unit": "mg"
              },
              {
                "label": "Calcium",
                "tag": "CA",
                "schemaOrgTag": null,
                "total": 1840.4266266000002,
                "hasRDI": true,
                "daily": 184.04266266000002,
                "unit": "mg"
              },
              {
                "label": "Magnesium",
                "tag": "MG",
                "schemaOrgTag": null,
                "total": 345.4907029,
                "hasRDI": true,
                "daily": 82.25969116666666,
                "unit": "mg"
              },
              {
                "label": "Potassium",
                "tag": "K",
                "schemaOrgTag": null,
                "total": 2060.3893989913267,
                "hasRDI": true,
                "daily": 43.8380723189644,
                "unit": "mg"
              },
              {
                "label": "Iron",
                "tag": "FE",
                "schemaOrgTag": null,
                "total": 13.627091977937553,
                "hasRDI": true,
                "daily": 75.70606654409751,
                "unit": "mg"
              },
              {
                "label": "Zinc",
                "tag": "ZN",
                "schemaOrgTag": null,
                "total": 30.484761066,
                "hasRDI": true,
                "daily": 277.1341915090909,
                "unit": "mg"
              },
              {
                "label": "Phosphorus",
                "tag": "P",
                "schemaOrgTag": null,
                "total": 2689.9759446,
                "hasRDI": true,
                "daily": 384.2822778,
                "unit": "mg"
              },
              {
                "label": "Vitamin A",
                "tag": "VITA_RAE",
                "schemaOrgTag": null,
                "total": 612.5236948000002,
                "hasRDI": true,
                "daily": 68.05818831111112,
                "unit": "µg"
              },
              {
                "label": "Vitamin C",
                "tag": "VITC",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "mg"
              },
              {
                "label": "Thiamin (B1)",
                "tag": "THIA",
                "schemaOrgTag": null,
                "total": 0.5267847191,
                "hasRDI": true,
                "daily": 43.898726591666666,
                "unit": "mg"
              },
              {
                "label": "Riboflavin (B2)",
                "tag": "RIBF",
                "schemaOrgTag": null,
                "total": 1.8529644787000001,
                "hasRDI": true,
                "daily": 142.53572913076923,
                "unit": "mg"
              },
              {
                "label": "Niacin (B3)",
                "tag": "NIA",
                "schemaOrgTag": null,
                "total": 23.575729479900005,
                "hasRDI": true,
                "daily": 147.34830924937503,
                "unit": "mg"
              },
              {
                "label": "Vitamin B6",
                "tag": "VITB6A",
                "schemaOrgTag": null,
                "total": 2.2065633551,
                "hasRDI": true,
                "daily": 169.7356427,
                "unit": "mg"
              },
              {
                "label": "Folate equivalent (total)",
                "tag": "FOLDFE",
                "schemaOrgTag": null,
                "total": 104.9114659,
                "hasRDI": true,
                "daily": 26.227866475,
                "unit": "µg"
              },
              {
                "label": "Folate (food)",
                "tag": "FOLFD",
                "schemaOrgTag": null,
                "total": 104.9114659,
                "hasRDI": false,
                "daily": 0,
                "unit": "µg"
              },
              {
                "label": "Folic acid",
                "tag": "FOLAC",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "µg"
              },
              {
                "label": "Vitamin B12",
                "tag": "VITB12",
                "schemaOrgTag": null,
                "total": 11.695676718000001,
                "hasRDI": true,
                "daily": 487.3198632500001,
                "unit": "µg"
              },
              {
                "label": "Vitamin D",
                "tag": "VITD",
                "schemaOrgTag": null,
                "total": 67.84777110000002,
                "hasRDI": true,
                "daily": 452.3184740000001,
                "unit": "µg"
              },
              {
                "label": "Vitamin E",
                "tag": "TOCPHA",
                "schemaOrgTag": null,
                "total": 3.3403070290000003,
                "hasRDI": true,
                "daily": 22.26871352666667,
                "unit": "mg"
              },
              {
                "label": "Vitamin K",
                "tag": "VITK1",
                "schemaOrgTag": null,
                "total": 14.718662660000001,
                "hasRDI": true,
                "daily": 12.265552216666668,
                "unit": "µg"
              },
              {
                "label": "Sugar alcohols",
                "tag": "Sugar.alcohol",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Water",
                "tag": "WATER",
                "schemaOrgTag": null,
                "total": 497.3778243189505,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          "bookmarked": false,
          "bought": false
        },
        {
          "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_5f3f94497e55142479e16614edcd2b29",
            "label": "Three Bean Taco Casserole",
            "image": "https://www.edamam.com/web-img/3a5/3a5d46ed5c8ba51eac0cd94999fb6ea0.jpg",
            "source": "Chez Us",
            "url": "http://chezus.com/2015/08/25/three-bean-taco-casserole/",
            "shareAs": "http://www.edamam.com/recipe/three-bean-taco-casserole-5f3f94497e55142479e16614edcd2b29/taco",
            "yield": 12,
            "dietLabels": [
              "Balanced"
            ],
            "healthLabels": [
              "Sugar-Conscious",
              "Vegetarian",
              "Peanut-Free",
              "Tree-Nut-Free",
              "Alcohol-Free"
            ],
            "cautions": [
              "Eggs",
              "Milk",
              "Sulfites"
            ],
            "ingredientLines": [
              "* 1 tablespoon olive oil",
              "* 1 medium onion, diced",
              "* 2 ear of corn, kernel only",
              "* 1 15.5 ounce can of kidney bean",
              "* 1 15.5 ounce can of pinto bean",
              "* 1 15.5 ounce can of black bean",
              "* 2 packet of rick bayless texa original taco skillet sauce",
              "* 1 cup mild cheddar, grated",
              "* 1 cup 3 pepper cheese, grated",
              "* 8 crispy taco shell, broken up",
              "* 2 roma tomato, diced, for garnish",
              "* 1 jalapeno, thinly sliced, for garnish",
              "* 3 green onion, thinly sliced, for garnish"
            ],
            "ingredients": [
              {
                "text": "* 1 tablespoon olive oil",
                "weight": 13.5
              },
              {
                "text": "* 1 medium onion, diced",
                "weight": 110
              },
              {
                "text": "* 2 ear of corn, kernel only",
                "weight": 250
              },
              {
                "text": "* 1 15.5 ounce can of kidney bean",
                "weight": 439.4176084375
              },
              {
                "text": "* 1 15.5 ounce can of pinto bean",
                "weight": 439.4176084375
              },
              {
                "text": "* 1 15.5 ounce can of black bean",
                "weight": 439.4176084375
              },
              {
                "text": "* 2 packet of rick bayless texa original taco skillet sauce",
                "weight": 25.4
              },
              {
                "text": "* 1 cup mild cheddar, grated",
                "weight": 113
              },
              {
                "text": "* 1 cup 3 pepper cheese, grated",
                "weight": 113
              },
              {
                "text": "* 8 crispy taco shell, broken up",
                "weight": 101.6
              }
            ],
            "calories": 3200.3368883843755,
            "totalWeight": 2044.7528253125001,
            "totalTime": 0,
            "totalNutrients": {
              "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 3200.3368883843755,
                "unit": "kcal"
              },
              "FAT": {
                "label": "Fat",
                "quantity": 127.53207519103127,
                "unit": "g"
              },
              "FASAT": {
                "label": "Saturated",
                "quantity": 56.64873185555626,
                "unit": "g"
              },
              "FATRN": {
                "label": "Trans",
                "quantity": 2.8829800000000003,
                "unit": "g"
              },
              "FAMS": {
                "label": "Monounsaturated",
                "quantity": 40.749503607250006,
                "unit": "g"
              },
              "FAPU": {
                "label": "Polyunsaturated",
                "quantity": 15.478585391771876,
                "unit": "g"
              },
              "CHOCDF": {
                "label": "Carbs",
                "quantity": 377.95150784590624,
                "unit": "g"
              },
              "FIBTG": {
                "label": "Fiber",
                "quantity": 90.7617406090625,
                "unit": "g"
              },
              "SUGAR": {
                "label": "Sugars",
                "quantity": 28.164541341062503,
                "unit": "g"
              },
              "PROCNT": {
                "label": "Protein",
                "quantity": 152.03087177900002,
                "unit": "g"
              },
              "CHOLE": {
                "label": "Cholesterol",
                "quantity": 230.52,
                "unit": "mg"
              },
              "NA": {
                "label": "Sodium",
                "quantity": 4841.370504784375,
                "unit": "mg"
              },
              "CA": {
                "label": "Calcium",
                "quantity": 2267.9662431375,
                "unit": "mg"
              },
              "MG": {
                "label": "Magnesium",
                "quantity": 670.48255193125,
                "unit": "mg"
              },
              "K": {
                "label": "Potassium",
                "quantity": 4959.695213103125,
                "unit": "mg"
              },
              "FE": {
                "label": "Iron",
                "quantity": 23.78537477125,
                "unit": "mg"
              },
              "ZN": {
                "label": "Zinc",
                "quantity": 18.808123495843752,
                "unit": "mg"
              },
              "P": {
                "label": "Phosphorus",
                "quantity": 2928.1486492281256,
                "unit": "mg"
              },
              "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 625.6500000000001,
                "unit": "µg"
              },
              "VITC": {
                "label": "Vitamin C",
                "quantity": 43.716704337500005,
                "unit": "mg"
              },
              "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 1.9968462339875004,
                "unit": "mg"
              },
              "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 2.16703345603125,
                "unit": "mg"
              },
              "NIA": {
                "label": "Niacin (B3)",
                "quantity": 12.514941437940626,
                "unit": "mg"
              },
              "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 1.5148987148843749,
                "unit": "mg"
              },
              "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 819.3053062093751,
                "unit": "µg"
              },
              "FOLFD": {
                "label": "Folate (food)",
                "quantity": 769.775306209375,
                "unit": "µg"
              },
              "FOLAC": {
                "label": "Folic acid",
                "quantity": 30.48,
                "unit": "µg"
              },
              "VITB12": {
                "label": "Vitamin B12",
                "quantity": 1.9888000000000001,
                "unit": "µg"
              },
              "VITD": {
                "label": "Vitamin D",
                "quantity": 54.24000000000001,
                "unit": "IU"
              },
              "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 7.635622694,
                "unit": "mg"
              },
              "VITK1": {
                "label": "Vitamin K",
                "quantity": 55.16572694,
                "unit": "µg"
              },
              "WATER": {
                "label": "Water",
                "quantity": 1354.9958122036253,
                "unit": "g"
              }
            },
            "totalDaily": {
              "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 160.01684441921878,
                "unit": "%"
              },
              "FAT": {
                "label": "Fat",
                "quantity": 196.20319260158658,
                "unit": "%"
              },
              "FASAT": {
                "label": "Saturated",
                "quantity": 283.24365927778126,
                "unit": "%"
              },
              "CHOCDF": {
                "label": "Carbs",
                "quantity": 125.98383594863542,
                "unit": "%"
              },
              "FIBTG": {
                "label": "Fiber",
                "quantity": 363.04696243625006,
                "unit": "%"
              },
              "PROCNT": {
                "label": "Protein",
                "quantity": 304.06174355800005,
                "unit": "%"
              },
              "CHOLE": {
                "label": "Cholesterol",
                "quantity": 76.84,
                "unit": "%"
              },
              "NA": {
                "label": "Sodium",
                "quantity": 201.7237710326823,
                "unit": "%"
              },
              "CA": {
                "label": "Calcium",
                "quantity": 226.79662431375002,
                "unit": "%"
              },
              "MG": {
                "label": "Magnesium",
                "quantity": 159.63870284077382,
                "unit": "%"
              },
              "K": {
                "label": "Potassium",
                "quantity": 105.52543006602393,
                "unit": "%"
              },
              "FE": {
                "label": "Iron",
                "quantity": 132.1409709513889,
                "unit": "%"
              },
              "ZN": {
                "label": "Zinc",
                "quantity": 170.98294087130682,
                "unit": "%"
              },
              "P": {
                "label": "Phosphorus",
                "quantity": 418.3069498897322,
                "unit": "%"
              },
              "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 69.51666666666668,
                "unit": "%"
              },
              "VITC": {
                "label": "Vitamin C",
                "quantity": 48.574115930555564,
                "unit": "%"
              },
              "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 166.4038528322917,
                "unit": "%"
              },
              "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 166.69488123317308,
                "unit": "%"
              },
              "NIA": {
                "label": "Niacin (B3)",
                "quantity": 78.21838398712892,
                "unit": "%"
              },
              "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 116.53067037572114,
                "unit": "%"
              },
              "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 204.82632655234377,
                "unit": "%"
              },
              "VITB12": {
                "label": "Vitamin B12",
                "quantity": 82.86666666666667,
                "unit": "%"
              },
              "VITD": {
                "label": "Vitamin D",
                "quantity": 361.6000000000001,
                "unit": "%"
              },
              "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 50.904151293333335,
                "unit": "%"
              },
              "VITK1": {
                "label": "Vitamin K",
                "quantity": 45.971439116666666,
                "unit": "%"
              }
            },
            "digest": [
              {
                "label": "Fat",
                "tag": "FAT",
                "schemaOrgTag": "fatContent",
                "total": 127.53207519103127,
                "hasRDI": true,
                "daily": 196.20319260158658,
                "unit": "g",
                "sub": [
                  {
                    "label": "Saturated",
                    "tag": "FASAT",
                    "schemaOrgTag": "saturatedFatContent",
                    "total": 56.64873185555626,
                    "hasRDI": true,
                    "daily": 283.24365927778126,
                    "unit": "g"
                  },
                  {
                    "label": "Trans",
                    "tag": "FATRN",
                    "schemaOrgTag": "transFatContent",
                    "total": 2.8829800000000003,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Monounsaturated",
                    "tag": "FAMS",
                    "schemaOrgTag": null,
                    "total": 40.749503607250006,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Polyunsaturated",
                    "tag": "FAPU",
                    "schemaOrgTag": null,
                    "total": 15.478585391771876,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  }
                ]
              },
              {
                "label": "Carbs",
                "tag": "CHOCDF",
                "schemaOrgTag": "carbohydrateContent",
                "total": 377.95150784590624,
                "hasRDI": true,
                "daily": 125.98383594863542,
                "unit": "g",
                "sub": [
                  {
                    "label": "Carbs (net)",
                    "tag": "CHOCDF.net",
                    "schemaOrgTag": null,
                    "total": 287.18976723684375,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Fiber",
                    "tag": "FIBTG",
                    "schemaOrgTag": "fiberContent",
                    "total": 90.7617406090625,
                    "hasRDI": true,
                    "daily": 363.04696243625006,
                    "unit": "g"
                  },
                  {
                    "label": "Sugars",
                    "tag": "SUGAR",
                    "schemaOrgTag": "sugarContent",
                    "total": 28.164541341062503,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Sugars, added",
                    "tag": "SUGAR.added",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  }
                ]
              },
              {
                "label": "Protein",
                "tag": "PROCNT",
                "schemaOrgTag": "proteinContent",
                "total": 152.03087177900002,
                "hasRDI": true,
                "daily": 304.06174355800005,
                "unit": "g"
              },
              {
                "label": "Cholesterol",
                "tag": "CHOLE",
                "schemaOrgTag": "cholesterolContent",
                "total": 230.52,
                "hasRDI": true,
                "daily": 76.84,
                "unit": "mg"
              },
              {
                "label": "Sodium",
                "tag": "NA",
                "schemaOrgTag": "sodiumContent",
                "total": 4841.370504784375,
                "hasRDI": true,
                "daily": 201.7237710326823,
                "unit": "mg"
              },
              {
                "label": "Calcium",
                "tag": "CA",
                "schemaOrgTag": null,
                "total": 2267.9662431375,
                "hasRDI": true,
                "daily": 226.79662431375002,
                "unit": "mg"
              },
              {
                "label": "Magnesium",
                "tag": "MG",
                "schemaOrgTag": null,
                "total": 670.48255193125,
                "hasRDI": true,
                "daily": 159.63870284077382,
                "unit": "mg"
              },
              {
                "label": "Potassium",
                "tag": "K",
                "schemaOrgTag": null,
                "total": 4959.695213103125,
                "hasRDI": true,
                "daily": 105.52543006602393,
                "unit": "mg"
              },
              {
                "label": "Iron",
                "tag": "FE",
                "schemaOrgTag": null,
                "total": 23.78537477125,
                "hasRDI": true,
                "daily": 132.1409709513889,
                "unit": "mg"
              },
              {
                "label": "Zinc",
                "tag": "ZN",
                "schemaOrgTag": null,
                "total": 18.808123495843752,
                "hasRDI": true,
                "daily": 170.98294087130682,
                "unit": "mg"
              },
              {
                "label": "Phosphorus",
                "tag": "P",
                "schemaOrgTag": null,
                "total": 2928.1486492281256,
                "hasRDI": true,
                "daily": 418.3069498897322,
                "unit": "mg"
              },
              {
                "label": "Vitamin A",
                "tag": "VITA_RAE",
                "schemaOrgTag": null,
                "total": 625.6500000000001,
                "hasRDI": true,
                "daily": 69.51666666666668,
                "unit": "µg"
              },
              {
                "label": "Vitamin C",
                "tag": "VITC",
                "schemaOrgTag": null,
                "total": 43.716704337500005,
                "hasRDI": true,
                "daily": 48.574115930555564,
                "unit": "mg"
              },
              {
                "label": "Thiamin (B1)",
                "tag": "THIA",
                "schemaOrgTag": null,
                "total": 1.9968462339875004,
                "hasRDI": true,
                "daily": 166.4038528322917,
                "unit": "mg"
              },
              {
                "label": "Riboflavin (B2)",
                "tag": "RIBF",
                "schemaOrgTag": null,
                "total": 2.16703345603125,
                "hasRDI": true,
                "daily": 166.69488123317308,
                "unit": "mg"
              },
              {
                "label": "Niacin (B3)",
                "tag": "NIA",
                "schemaOrgTag": null,
                "total": 12.514941437940626,
                "hasRDI": true,
                "daily": 78.21838398712892,
                "unit": "mg"
              },
              {
                "label": "Vitamin B6",
                "tag": "VITB6A",
                "schemaOrgTag": null,
                "total": 1.5148987148843749,
                "hasRDI": true,
                "daily": 116.53067037572114,
                "unit": "mg"
              },
              {
                "label": "Folate equivalent (total)",
                "tag": "FOLDFE",
                "schemaOrgTag": null,
                "total": 819.3053062093751,
                "hasRDI": true,
                "daily": 204.82632655234377,
                "unit": "µg"
              },
              {
                "label": "Folate (food)",
                "tag": "FOLFD",
                "schemaOrgTag": null,
                "total": 769.775306209375,
                "hasRDI": false,
                "daily": 0,
                "unit": "µg"
              },
              {
                "label": "Folic acid",
                "tag": "FOLAC",
                "schemaOrgTag": null,
                "total": 30.48,
                "hasRDI": false,
                "daily": 0,
                "unit": "µg"
              },
              {
                "label": "Vitamin B12",
                "tag": "VITB12",
                "schemaOrgTag": null,
                "total": 1.9888000000000001,
                "hasRDI": true,
                "daily": 82.86666666666667,
                "unit": "µg"
              },
              {
                "label": "Vitamin D",
                "tag": "VITD",
                "schemaOrgTag": null,
                "total": 54.24000000000001,
                "hasRDI": true,
                "daily": 361.6000000000001,
                "unit": "µg"
              },
              {
                "label": "Vitamin E",
                "tag": "TOCPHA",
                "schemaOrgTag": null,
                "total": 7.635622694,
                "hasRDI": true,
                "daily": 50.904151293333335,
                "unit": "mg"
              },
              {
                "label": "Vitamin K",
                "tag": "VITK1",
                "schemaOrgTag": null,
                "total": 55.16572694,
                "hasRDI": true,
                "daily": 45.971439116666666,
                "unit": "µg"
              },
              {
                "label": "Sugar alcohols",
                "tag": "Sugar.alcohol",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Water",
                "tag": "WATER",
                "schemaOrgTag": null,
                "total": 1354.9958122036253,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          "bookmarked": false,
          "bought": false
        },
        {
          "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b1bccb6b7fd5e8dc00c428772d8bad48",
            "label": "The Eatingwell Taco Recipe",
            "image": "https://www.edamam.com/web-img/fd6/fd61978d4e8f54059e99530d5737b545.jpg",
            "source": "Kitchen Daily",
            "url": "http://www.kitchendaily.com/recipe/the-eatingwell-taco-140840",
            "shareAs": "http://www.edamam.com/recipe/the-eatingwell-taco-recipe-b1bccb6b7fd5e8dc00c428772d8bad48/taco",
            "yield": 6,
            "dietLabels": [
              "Low-Carb"
            ],
            "healthLabels": [
              "Sugar-Conscious",
              "Peanut-Free",
              "Tree-Nut-Free",
              "Alcohol-Free"
            ],
            "cautions": [
              "Sulfites"
            ],
            "ingredientLines": [
              "Lean & Spicy Taco Meat (recipe follows)",
              "3/4 cup diced tomatoes",
              "12 12 EatingWell Crispy Taco Shells (recipe follows)",
              "1/4 cup diced red onion",
              "3 cups shredded romaine lettuce",
              "3/4 cup shredded reduced-fat Cheddar cheese (3 ounces)",
              "3/4 cup prepared salsa"
            ],
            "ingredients": [
              {
                "text": "3/4 cup diced tomatoes",
                "weight": 180
              },
              {
                "text": "1/4 cup diced red onion",
                "weight": 40
              },
              {
                "text": "3 cups shredded romaine lettuce",
                "weight": 141
              },
              {
                "text": "3/4 cup shredded reduced-fat Cheddar cheese (3 ounces)",
                "weight": 85.048569375
              },
              {
                "text": "3/4 cup prepared salsa",
                "weight": 195
              }
            ],
            "calories": 470.61719166250003,
            "totalWeight": 641.0485693749999,
            "totalTime": 0,
            "totalNutrients": {
              "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 470.61719166250003,
                "unit": "kcal"
              },
              "FAT": {
                "label": "Fat",
                "quantity": 30.007926162625,
                "unit": "g"
              },
              "FASAT": {
                "label": "Saturated",
                "quantity": 16.66369691655,
                "unit": "g"
              },
              "FATRN": {
                "label": "Trans",
                "quantity": 1.0027226329312502,
                "unit": "g"
              },
              "FAMS": {
                "label": "Monounsaturated",
                "quantity": 7.310763426925002,
                "unit": "g"
              },
              "FAPU": {
                "label": "Polyunsaturated",
                "quantity": 1.8571959991437503,
                "unit": "g"
              },
              "CHOCDF": {
                "label": "Carbs",
                "quantity": 28.8560459726875,
                "unit": "g"
              },
              "FIBTG": {
                "label": "Fiber",
                "quantity": 10.571,
                "unit": "g"
              },
              "SUGAR": {
                "label": "Sugars",
                "quantity": 15.885035994249998,
                "unit": "g"
              },
              "PROCNT": {
                "label": "Protein",
                "quantity": 27.04497607775,
                "unit": "g"
              },
              "CHOLE": {
                "label": "Cholesterol",
                "quantity": 86.7495407625,
                "unit": "mg"
              },
              "NA": {
                "label": "Sodium",
                "quantity": 2142.342786775,
                "unit": "mg"
              },
              "CA": {
                "label": "Calcium",
                "quantity": 747.70784328125,
                "unit": "mg"
              },
              "MG": {
                "label": "Magnesium",
                "quantity": 93.95311373125,
                "unit": "mg"
              },
              "K": {
                "label": "Potassium",
                "quantity": 1370.856912725,
                "unit": "mg"
              },
              "FE": {
                "label": "Iron",
                "quantity": 3.3937777110000003,
                "unit": "mg"
              },
              "ZN": {
                "label": "Zinc",
                "quantity": 3.8959659295625,
                "unit": "mg"
              },
              "P": {
                "label": "Phosphorus",
                "quantity": 553.07973314375,
                "unit": "mg"
              },
              "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 921.23773745625,
                "unit": "µg"
              },
              "VITC": {
                "label": "Vitamin C",
                "quantity": 34.985,
                "unit": "mg"
              },
              "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 1.24613311373125,
                "unit": "mg"
              },
              "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 0.6357807910875,
                "unit": "mg"
              },
              "NIA": {
                "label": "Niacin (B3)",
                "quantity": 3.98649894205625,
                "unit": "mg"
              },
              "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 0.73701379899375,
                "unit": "mg"
              },
              "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 243.6726280375,
                "unit": "µg"
              },
              "FOLFD": {
                "label": "Folate (food)",
                "quantity": 243.6726280375,
                "unit": "µg"
              },
              "VITB12": {
                "label": "Vitamin B12",
                "quantity": 0.7484274105000001,
                "unit": "µg"
              },
              "VITD": {
                "label": "Vitamin D",
                "quantity": 20.41165665,
                "unit": "IU"
              },
              "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 4.2956788411249995,
                "unit": "mg"
              },
              "VITK1": {
                "label": "Vitamin K",
                "quantity": 160.021408511875,
                "unit": "µg"
              },
              "WATER": {
                "label": "Water",
                "quantity": 545.0481192381251,
                "unit": "g"
              }
            },
            "totalDaily": {
              "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 23.530859583125004,
                "unit": "%"
              },
              "FAT": {
                "label": "Fat",
                "quantity": 46.1660402501923,
                "unit": "%"
              },
              "FASAT": {
                "label": "Saturated",
                "quantity": 83.31848458274999,
                "unit": "%"
              },
              "CHOCDF": {
                "label": "Carbs",
                "quantity": 9.618681990895833,
                "unit": "%"
              },
              "FIBTG": {
                "label": "Fiber",
                "quantity": 42.284,
                "unit": "%"
              },
              "PROCNT": {
                "label": "Protein",
                "quantity": 54.08995215550001,
                "unit": "%"
              },
              "CHOLE": {
                "label": "Cholesterol",
                "quantity": 28.9165135875,
                "unit": "%"
              },
              "NA": {
                "label": "Sodium",
                "quantity": 89.26428278229167,
                "unit": "%"
              },
              "CA": {
                "label": "Calcium",
                "quantity": 74.77078432812499,
                "unit": "%"
              },
              "MG": {
                "label": "Magnesium",
                "quantity": 22.36978898363095,
                "unit": "%"
              },
              "K": {
                "label": "Potassium",
                "quantity": 29.167168355851064,
                "unit": "%"
              },
              "FE": {
                "label": "Iron",
                "quantity": 18.85432061666667,
                "unit": "%"
              },
              "ZN": {
                "label": "Zinc",
                "quantity": 35.417872086931816,
                "unit": "%"
              },
              "P": {
                "label": "Phosphorus",
                "quantity": 79.01139044910714,
                "unit": "%"
              },
              "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 102.35974860625001,
                "unit": "%"
              },
              "VITC": {
                "label": "Vitamin C",
                "quantity": 38.87222222222222,
                "unit": "%"
              },
              "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 103.84442614427083,
                "unit": "%"
              },
              "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 48.90621469903846,
                "unit": "%"
              },
              "NIA": {
                "label": "Niacin (B3)",
                "quantity": 24.915618387851563,
                "unit": "%"
              },
              "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 56.69336915336538,
                "unit": "%"
              },
              "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 60.918157009375,
                "unit": "%"
              },
              "VITB12": {
                "label": "Vitamin B12",
                "quantity": 31.1844754375,
                "unit": "%"
              },
              "VITD": {
                "label": "Vitamin D",
                "quantity": 136.07771100000002,
                "unit": "%"
              },
              "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 28.63785894083333,
                "unit": "%"
              },
              "VITK1": {
                "label": "Vitamin K",
                "quantity": 133.35117375989583,
                "unit": "%"
              }
            },
            "digest": [
              {
                "label": "Fat",
                "tag": "FAT",
                "schemaOrgTag": "fatContent",
                "total": 30.007926162625,
                "hasRDI": true,
                "daily": 46.1660402501923,
                "unit": "g",
                "sub": [
                  {
                    "label": "Saturated",
                    "tag": "FASAT",
                    "schemaOrgTag": "saturatedFatContent",
                    "total": 16.66369691655,
                    "hasRDI": true,
                    "daily": 83.31848458274999,
                    "unit": "g"
                  },
                  {
                    "label": "Trans",
                    "tag": "FATRN",
                    "schemaOrgTag": "transFatContent",
                    "total": 1.0027226329312502,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Monounsaturated",
                    "tag": "FAMS",
                    "schemaOrgTag": null,
                    "total": 7.310763426925002,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Polyunsaturated",
                    "tag": "FAPU",
                    "schemaOrgTag": null,
                    "total": 1.8571959991437503,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  }
                ]
              },
              {
                "label": "Carbs",
                "tag": "CHOCDF",
                "schemaOrgTag": "carbohydrateContent",
                "total": 28.8560459726875,
                "hasRDI": true,
                "daily": 9.618681990895833,
                "unit": "g",
                "sub": [
                  {
                    "label": "Carbs (net)",
                    "tag": "CHOCDF.net",
                    "schemaOrgTag": null,
                    "total": 18.2850459726875,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Fiber",
                    "tag": "FIBTG",
                    "schemaOrgTag": "fiberContent",
                    "total": 10.571,
                    "hasRDI": true,
                    "daily": 42.284,
                    "unit": "g"
                  },
                  {
                    "label": "Sugars",
                    "tag": "SUGAR",
                    "schemaOrgTag": "sugarContent",
                    "total": 15.885035994249998,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Sugars, added",
                    "tag": "SUGAR.added",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  }
                ]
              },
              {
                "label": "Protein",
                "tag": "PROCNT",
                "schemaOrgTag": "proteinContent",
                "total": 27.04497607775,
                "hasRDI": true,
                "daily": 54.08995215550001,
                "unit": "g"
              },
              {
                "label": "Cholesterol",
                "tag": "CHOLE",
                "schemaOrgTag": "cholesterolContent",
                "total": 86.7495407625,
                "hasRDI": true,
                "daily": 28.9165135875,
                "unit": "mg"
              },
              {
                "label": "Sodium",
                "tag": "NA",
                "schemaOrgTag": "sodiumContent",
                "total": 2142.342786775,
                "hasRDI": true,
                "daily": 89.26428278229167,
                "unit": "mg"
              },
              {
                "label": "Calcium",
                "tag": "CA",
                "schemaOrgTag": null,
                "total": 747.70784328125,
                "hasRDI": true,
                "daily": 74.77078432812499,
                "unit": "mg"
              },
              {
                "label": "Magnesium",
                "tag": "MG",
                "schemaOrgTag": null,
                "total": 93.95311373125,
                "hasRDI": true,
                "daily": 22.36978898363095,
                "unit": "mg"
              },
              {
                "label": "Potassium",
                "tag": "K",
                "schemaOrgTag": null,
                "total": 1370.856912725,
                "hasRDI": true,
                "daily": 29.167168355851064,
                "unit": "mg"
              },
              {
                "label": "Iron",
                "tag": "FE",
                "schemaOrgTag": null,
                "total": 3.3937777110000003,
                "hasRDI": true,
                "daily": 18.85432061666667,
                "unit": "mg"
              },
              {
                "label": "Zinc",
                "tag": "ZN",
                "schemaOrgTag": null,
                "total": 3.8959659295625,
                "hasRDI": true,
                "daily": 35.417872086931816,
                "unit": "mg"
              },
              {
                "label": "Phosphorus",
                "tag": "P",
                "schemaOrgTag": null,
                "total": 553.07973314375,
                "hasRDI": true,
                "daily": 79.01139044910714,
                "unit": "mg"
              },
              {
                "label": "Vitamin A",
                "tag": "VITA_RAE",
                "schemaOrgTag": null,
                "total": 921.23773745625,
                "hasRDI": true,
                "daily": 102.35974860625001,
                "unit": "µg"
              },
              {
                "label": "Vitamin C",
                "tag": "VITC",
                "schemaOrgTag": null,
                "total": 34.985,
                "hasRDI": true,
                "daily": 38.87222222222222,
                "unit": "mg"
              },
              {
                "label": "Thiamin (B1)",
                "tag": "THIA",
                "schemaOrgTag": null,
                "total": 1.24613311373125,
                "hasRDI": true,
                "daily": 103.84442614427083,
                "unit": "mg"
              },
              {
                "label": "Riboflavin (B2)",
                "tag": "RIBF",
                "schemaOrgTag": null,
                "total": 0.6357807910875,
                "hasRDI": true,
                "daily": 48.90621469903846,
                "unit": "mg"
              },
              {
                "label": "Niacin (B3)",
                "tag": "NIA",
                "schemaOrgTag": null,
                "total": 3.98649894205625,
                "hasRDI": true,
                "daily": 24.915618387851563,
                "unit": "mg"
              },
              {
                "label": "Vitamin B6",
                "tag": "VITB6A",
                "schemaOrgTag": null,
                "total": 0.73701379899375,
                "hasRDI": true,
                "daily": 56.69336915336538,
                "unit": "mg"
              },
              {
                "label": "Folate equivalent (total)",
                "tag": "FOLDFE",
                "schemaOrgTag": null,
                "total": 243.6726280375,
                "hasRDI": true,
                "daily": 60.918157009375,
                "unit": "µg"
              },
              {
                "label": "Folate (food)",
                "tag": "FOLFD",
                "schemaOrgTag": null,
                "total": 243.6726280375,
                "hasRDI": false,
                "daily": 0,
                "unit": "µg"
              },
              {
                "label": "Folic acid",
                "tag": "FOLAC",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "µg"
              },
              {
                "label": "Vitamin B12",
                "tag": "VITB12",
                "schemaOrgTag": null,
                "total": 0.7484274105000001,
                "hasRDI": true,
                "daily": 31.1844754375,
                "unit": "µg"
              },
              {
                "label": "Vitamin D",
                "tag": "VITD",
                "schemaOrgTag": null,
                "total": 20.41165665,
                "hasRDI": true,
                "daily": 136.07771100000002,
                "unit": "µg"
              },
              {
                "label": "Vitamin E",
                "tag": "TOCPHA",
                "schemaOrgTag": null,
                "total": 4.2956788411249995,
                "hasRDI": true,
                "daily": 28.63785894083333,
                "unit": "mg"
              },
              {
                "label": "Vitamin K",
                "tag": "VITK1",
                "schemaOrgTag": null,
                "total": 160.021408511875,
                "hasRDI": true,
                "daily": 133.35117375989583,
                "unit": "µg"
              },
              {
                "label": "Sugar alcohols",
                "tag": "Sugar.alcohol",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Water",
                "tag": "WATER",
                "schemaOrgTag": null,
                "total": 545.0481192381251,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          "bookmarked": false,
          "bought": false
        },
        {
          "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_1192647edd9b52f9ed1777661f18c748",
            "label": "Twice-as-Nice Guapo Taco",
            "image": "https://www.edamam.com/web-img/a52/a529efba57192a12c373f7ed991929ca.jpg",
            "source": "Cooking Channel",
            "url": "http://www.cookingchanneltv.com/recipes/lisa-lillien/twice-as-nice-guapo-taco.html",
            "shareAs": "http://www.edamam.com/recipe/twice-as-nice-guapo-taco-1192647edd9b52f9ed1777661f18c748/taco",
            "yield": 1,
            "dietLabels": [
              "Balanced"
            ],
            "healthLabels": [
              "Sugar-Conscious",
              "Vegetarian",
              "Peanut-Free",
              "Tree-Nut-Free",
              "Alcohol-Free"
            ],
            "cautions": [
              "Gluten",
              "Wheat",
              "Eggs",
              "Milk",
              "Sulfites",
              "FODMAP"
            ],
            "ingredientLines": [
              "1/4 cup frozen ground-beef-style soy crumbles",
              "1/8 teaspoon dry taco seasoning mix",
              "2 tablespoons fat-free refried beans",
              "1 (6-inch) high-fiber flour tortilla with about 50 calories",
              "1 corn taco shell",
              "1/4 cup shredded lettuce",
              "1 tablespoon shredded fat-free cheddar cheese"
            ],
            "ingredients": [
              {
                "text": "1/4 cup frozen ground-beef-style soy crumbles",
                "weight": 30.5
              },
              {
                "text": "1/8 teaspoon dry taco seasoning mix",
                "weight": 0.35625
              },
              {
                "text": "2 tablespoons fat-free refried beans",
                "weight": 28.87499999951181
              },
              {
                "text": "1 (6-inch) high-fiber flour tortilla with about 50 calories",
                "weight": 49
              },
              {
                "text": "1 corn taco shell",
                "weight": 12.7
              },
              {
                "text": "1/4 cup shredded lettuce",
                "weight": 13.75
              },
              {
                "text": "1 tablespoon shredded fat-free cheddar cheese",
                "weight": 15.33984374974065
              }
            ],
            "calories": 317.4926406235614,
            "totalWeight": 150.52109374925246,
            "totalTime": 10,
            "totalNutrients": {
              "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 317.4926406235614,
                "unit": "kcal"
              },
              "FAT": {
                "label": "Fat",
                "quantity": 12.35730265616009,
                "unit": "g"
              },
              "FASAT": {
                "label": "Saturated",
                "quantity": 4.563312187449315,
                "unit": "g"
              },
              "FATRN": {
                "label": "Trans",
                "quantity": 0.20956075780944228,
                "unit": "g"
              },
              "FAMS": {
                "label": "Monounsaturated",
                "quantity": 4.139857031227928,
                "unit": "g"
              },
              "FAPU": {
                "label": "Polyunsaturated",
                "quantity": 2.301398710932382,
                "unit": "g"
              },
              "CHOCDF": {
                "label": "Carbs",
                "quantity": 40.64562492180565,
                "unit": "g"
              },
              "FIBTG": {
                "label": "Fiber",
                "quantity": 3.582656249977055,
                "unit": "g"
              },
              "SUGAR": {
                "label": "Sugars",
                "quantity": 1.8808209374962959,
                "unit": "g"
              },
              "PROCNT": {
                "label": "Protein",
                "quantity": 11.152349687411583,
                "unit": "g"
              },
              "CHOLE": {
                "label": "Cholesterol",
                "quantity": 15.646640624735463,
                "unit": "mg"
              },
              "NA": {
                "label": "Sodium",
                "quantity": 659.0822812461915,
                "unit": "mg"
              },
              "CA": {
                "label": "Calcium",
                "quantity": 235.14394531058343,
                "unit": "mg"
              },
              "MG": {
                "label": "Magnesium",
                "quantity": 45.662757812244465,
                "unit": "mg"
              },
              "K": {
                "label": "Potassium",
                "quantity": 306.74778124812354,
                "unit": "mg"
              },
              "FE": {
                "label": "Iron",
                "quantity": 2.9200487499916763,
                "unit": "mg"
              },
              "ZN": {
                "label": "Zinc",
                "quantity": 1.3959141406129312,
                "unit": "mg"
              },
              "P": {
                "label": "Phosphorus",
                "quantity": 261.40721093573137,
                "unit": "mg"
              },
              "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 63.29578906181791,
                "unit": "µg"
              },
              "VITC": {
                "label": "Vitamin C",
                "quantity": 0.7686249999956063,
                "unit": "mg"
              },
              "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 0.2928037578122835,
                "unit": "mg"
              },
              "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 0.1564511718738012,
                "unit": "mg"
              },
              "NIA": {
                "label": "Niacin (B3)",
                "quantity": 2.480796539060631,
                "unit": "mg"
              },
              "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 0.12599627343682127,
                "unit": "mg"
              },
              "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 141.32960937465432,
                "unit": "µg"
              },
              "FOLFD": {
                "label": "Folate (food)",
                "quantity": 53.566609374654305,
                "unit": "µg"
              },
              "FOLAC": {
                "label": "Folic acid",
                "quantity": 52.048,
                "unit": "µg"
              },
              "VITB12": {
                "label": "Vitamin B12",
                "quantity": 0.13499062499771772,
                "unit": "µg"
              },
              "VITD": {
                "label": "Vitamin D",
                "quantity": 3.681562499937756,
                "unit": "IU"
              },
              "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 0.6649807812477819,
                "unit": "mg"
              },
              "VITK1": {
                "label": "Vitamin K",
                "quantity": 18.238805468732714,
                "unit": "µg"
              },
              "WATER": {
                "label": "Water",
                "quantity": 83.18595078076962,
                "unit": "g"
              }
            },
            "totalDaily": {
              "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 15.87463203117807,
                "unit": "%"
              },
              "FAT": {
                "label": "Fat",
                "quantity": 19.01123485563091,
                "unit": "%"
              },
              "FASAT": {
                "label": "Saturated",
                "quantity": 22.816560937246578,
                "unit": "%"
              },
              "CHOCDF": {
                "label": "Carbs",
                "quantity": 13.548541640601883,
                "unit": "%"
              },
              "FIBTG": {
                "label": "Fiber",
                "quantity": 14.33062499990822,
                "unit": "%"
              },
              "PROCNT": {
                "label": "Protein",
                "quantity": 22.304699374823166,
                "unit": "%"
              },
              "CHOLE": {
                "label": "Cholesterol",
                "quantity": 5.215546874911821,
                "unit": "%"
              },
              "NA": {
                "label": "Sodium",
                "quantity": 27.461761718591315,
                "unit": "%"
              },
              "CA": {
                "label": "Calcium",
                "quantity": 23.514394531058343,
                "unit": "%"
              },
              "MG": {
                "label": "Magnesium",
                "quantity": 10.87208519339154,
                "unit": "%"
              },
              "K": {
                "label": "Potassium",
                "quantity": 6.526548537194118,
                "unit": "%"
              },
              "FE": {
                "label": "Iron",
                "quantity": 16.22249305550931,
                "unit": "%"
              },
              "ZN": {
                "label": "Zinc",
                "quantity": 12.690128551026646,
                "unit": "%"
              },
              "P": {
                "label": "Phosphorus",
                "quantity": 37.34388727653305,
                "unit": "%"
              },
              "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 7.032865451313102,
                "unit": "%"
              },
              "VITC": {
                "label": "Vitamin C",
                "quantity": 0.8540277777728958,
                "unit": "%"
              },
              "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 24.400313151023628,
                "unit": "%"
              },
              "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 12.034705528753937,
                "unit": "%"
              },
              "NIA": {
                "label": "Niacin (B3)",
                "quantity": 15.504978369128944,
                "unit": "%"
              },
              "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 9.692021033601636,
                "unit": "%"
              },
              "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 35.33240234366358,
                "unit": "%"
              },
              "VITB12": {
                "label": "Vitamin B12",
                "quantity": 5.624609374904905,
                "unit": "%"
              },
              "VITD": {
                "label": "Vitamin D",
                "quantity": 24.54374999958504,
                "unit": "%"
              },
              "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 4.433205208318546,
                "unit": "%"
              },
              "VITK1": {
                "label": "Vitamin K",
                "quantity": 15.199004557277261,
                "unit": "%"
              }
            },
            "digest": [
              {
                "label": "Fat",
                "tag": "FAT",
                "schemaOrgTag": "fatContent",
                "total": 12.35730265616009,
                "hasRDI": true,
                "daily": 19.01123485563091,
                "unit": "g",
                "sub": [
                  {
                    "label": "Saturated",
                    "tag": "FASAT",
                    "schemaOrgTag": "saturatedFatContent",
                    "total": 4.563312187449315,
                    "hasRDI": true,
                    "daily": 22.816560937246578,
                    "unit": "g"
                  },
                  {
                    "label": "Trans",
                    "tag": "FATRN",
                    "schemaOrgTag": "transFatContent",
                    "total": 0.20956075780944228,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Monounsaturated",
                    "tag": "FAMS",
                    "schemaOrgTag": null,
                    "total": 4.139857031227928,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Polyunsaturated",
                    "tag": "FAPU",
                    "schemaOrgTag": null,
                    "total": 2.301398710932382,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  }
                ]
              },
              {
                "label": "Carbs",
                "tag": "CHOCDF",
                "schemaOrgTag": "carbohydrateContent",
                "total": 40.64562492180565,
                "hasRDI": true,
                "daily": 13.548541640601883,
                "unit": "g",
                "sub": [
                  {
                    "label": "Carbs (net)",
                    "tag": "CHOCDF.net",
                    "schemaOrgTag": null,
                    "total": 37.06296867182859,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Fiber",
                    "tag": "FIBTG",
                    "schemaOrgTag": "fiberContent",
                    "total": 3.582656249977055,
                    "hasRDI": true,
                    "daily": 14.33062499990822,
                    "unit": "g"
                  },
                  {
                    "label": "Sugars",
                    "tag": "SUGAR",
                    "schemaOrgTag": "sugarContent",
                    "total": 1.8808209374962959,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Sugars, added",
                    "tag": "SUGAR.added",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  }
                ]
              },
              {
                "label": "Protein",
                "tag": "PROCNT",
                "schemaOrgTag": "proteinContent",
                "total": 11.152349687411583,
                "hasRDI": true,
                "daily": 22.304699374823166,
                "unit": "g"
              },
              {
                "label": "Cholesterol",
                "tag": "CHOLE",
                "schemaOrgTag": "cholesterolContent",
                "total": 15.646640624735463,
                "hasRDI": true,
                "daily": 5.215546874911821,
                "unit": "mg"
              },
              {
                "label": "Sodium",
                "tag": "NA",
                "schemaOrgTag": "sodiumContent",
                "total": 659.0822812461915,
                "hasRDI": true,
                "daily": 27.461761718591315,
                "unit": "mg"
              },
              {
                "label": "Calcium",
                "tag": "CA",
                "schemaOrgTag": null,
                "total": 235.14394531058343,
                "hasRDI": true,
                "daily": 23.514394531058343,
                "unit": "mg"
              },
              {
                "label": "Magnesium",
                "tag": "MG",
                "schemaOrgTag": null,
                "total": 45.662757812244465,
                "hasRDI": true,
                "daily": 10.87208519339154,
                "unit": "mg"
              },
              {
                "label": "Potassium",
                "tag": "K",
                "schemaOrgTag": null,
                "total": 306.74778124812354,
                "hasRDI": true,
                "daily": 6.526548537194118,
                "unit": "mg"
              },
              {
                "label": "Iron",
                "tag": "FE",
                "schemaOrgTag": null,
                "total": 2.9200487499916763,
                "hasRDI": true,
                "daily": 16.22249305550931,
                "unit": "mg"
              },
              {
                "label": "Zinc",
                "tag": "ZN",
                "schemaOrgTag": null,
                "total": 1.3959141406129312,
                "hasRDI": true,
                "daily": 12.690128551026646,
                "unit": "mg"
              },
              {
                "label": "Phosphorus",
                "tag": "P",
                "schemaOrgTag": null,
                "total": 261.40721093573137,
                "hasRDI": true,
                "daily": 37.34388727653305,
                "unit": "mg"
              },
              {
                "label": "Vitamin A",
                "tag": "VITA_RAE",
                "schemaOrgTag": null,
                "total": 63.29578906181791,
                "hasRDI": true,
                "daily": 7.032865451313102,
                "unit": "µg"
              },
              {
                "label": "Vitamin C",
                "tag": "VITC",
                "schemaOrgTag": null,
                "total": 0.7686249999956063,
                "hasRDI": true,
                "daily": 0.8540277777728958,
                "unit": "mg"
              },
              {
                "label": "Thiamin (B1)",
                "tag": "THIA",
                "schemaOrgTag": null,
                "total": 0.2928037578122835,
                "hasRDI": true,
                "daily": 24.400313151023628,
                "unit": "mg"
              },
              {
                "label": "Riboflavin (B2)",
                "tag": "RIBF",
                "schemaOrgTag": null,
                "total": 0.1564511718738012,
                "hasRDI": true,
                "daily": 12.034705528753937,
                "unit": "mg"
              },
              {
                "label": "Niacin (B3)",
                "tag": "NIA",
                "schemaOrgTag": null,
                "total": 2.480796539060631,
                "hasRDI": true,
                "daily": 15.504978369128944,
                "unit": "mg"
              },
              {
                "label": "Vitamin B6",
                "tag": "VITB6A",
                "schemaOrgTag": null,
                "total": 0.12599627343682127,
                "hasRDI": true,
                "daily": 9.692021033601636,
                "unit": "mg"
              },
              {
                "label": "Folate equivalent (total)",
                "tag": "FOLDFE",
                "schemaOrgTag": null,
                "total": 141.32960937465432,
                "hasRDI": true,
                "daily": 35.33240234366358,
                "unit": "µg"
              },
              {
                "label": "Folate (food)",
                "tag": "FOLFD",
                "schemaOrgTag": null,
                "total": 53.566609374654305,
                "hasRDI": false,
                "daily": 0,
                "unit": "µg"
              },
              {
                "label": "Folic acid",
                "tag": "FOLAC",
                "schemaOrgTag": null,
                "total": 52.048,
                "hasRDI": false,
                "daily": 0,
                "unit": "µg"
              },
              {
                "label": "Vitamin B12",
                "tag": "VITB12",
                "schemaOrgTag": null,
                "total": 0.13499062499771772,
                "hasRDI": true,
                "daily": 5.624609374904905,
                "unit": "µg"
              },
              {
                "label": "Vitamin D",
                "tag": "VITD",
                "schemaOrgTag": null,
                "total": 3.681562499937756,
                "hasRDI": true,
                "daily": 24.54374999958504,
                "unit": "µg"
              },
              {
                "label": "Vitamin E",
                "tag": "TOCPHA",
                "schemaOrgTag": null,
                "total": 0.6649807812477819,
                "hasRDI": true,
                "daily": 4.433205208318546,
                "unit": "mg"
              },
              {
                "label": "Vitamin K",
                "tag": "VITK1",
                "schemaOrgTag": null,
                "total": 18.238805468732714,
                "hasRDI": true,
                "daily": 15.199004557277261,
                "unit": "µg"
              },
              {
                "label": "Sugar alcohols",
                "tag": "Sugar.alcohol",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Water",
                "tag": "WATER",
                "schemaOrgTag": null,
                "total": 83.18595078076962,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          "bookmarked": false,
          "bought": false
        },
        {
          "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_0e1f3a83e4a38ab572e5a4743873da3b",
            "label": "Classic Taco Salad",
            "image": "https://www.edamam.com/web-img/58d/58da408e1cf64175edc2363fdbe3b9ed.jpg",
            "source": "Martha Stewart",
            "url": "http://www.marthastewart.com/338578/taco-salad",
            "shareAs": "http://www.edamam.com/recipe/classic-taco-salad-0e1f3a83e4a38ab572e5a4743873da3b/taco",
            "yield": 4,
            "dietLabels": [],
            "healthLabels": [
              "Vegetarian",
              "Peanut-Free",
              "Tree-Nut-Free",
              "Alcohol-Free"
            ],
            "cautions": [
              "Eggs",
              "Milk",
              "Sulfites"
            ],
            "ingredientLines": [
              "12 cups chopped romaine lettuce (about 1 head)",
              "1 diced ripe avocado",
              "2 halved and thinly sliced plum tomatoes",
              "2 cups broken tortilla chips",
              "1/4 cup prepared salsa",
              "3 cups thawed Taco Filling",
              "Sour cream (optional)",
              "Shredded Monterey Jack cheese (optional)"
            ],
            "ingredients": [
              {
                "text": "12 cups chopped romaine lettuce (about 1 head)",
                "weight": 626
              },
              {
                "text": "1 diced ripe avocado",
                "weight": 201
              },
              {
                "text": "2 halved and thinly sliced plum tomatoes",
                "weight": 124
              },
              {
                "text": "2 cups broken tortilla chips",
                "weight": 120
              },
              {
                "text": "1/4 cup prepared salsa",
                "weight": 65
              },
              {
                "text": "3 cups thawed Taco Filling",
                "weight": 38.099999999999994
              }
            ],
            "calories": 1246.946,
            "totalWeight": 1174.1,
            "totalTime": 20,
            "totalNutrients": {
              "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 1246.946,
                "unit": "kcal"
              },
              "FAT": {
                "label": "Fat",
                "quantity": 66.80109,
                "unit": "g"
              },
              "FASAT": {
                "label": "Saturated",
                "quantity": 10.609824999999999,
                "unit": "g"
              },
              "FATRN": {
                "label": "Trans",
                "quantity": 0.144732,
                "unit": "g"
              },
              "FAMS": {
                "label": "Monounsaturated",
                "quantity": 32.768834999999996,
                "unit": "g"
              },
              "FAPU": {
                "label": "Polyunsaturated",
                "quantity": 17.937825,
                "unit": "g"
              },
              "CHOCDF": {
                "label": "Carbs",
                "quantity": 151.97798999999998,
                "unit": "g"
              },
              "FIBTG": {
                "label": "Fiber",
                "quantity": 37.4637,
                "unit": "g"
              },
              "SUGAR": {
                "label": "Sugars",
                "quantity": 16.621699999999997,
                "unit": "g"
              },
              "PROCNT": {
                "label": "Protein",
                "quantity": 24.19821,
                "unit": "g"
              },
              "NA": {
                "label": "Sodium",
                "quantity": 1024.044,
                "unit": "mg"
              },
              "CA": {
                "label": "Calcium",
                "quantity": 425.5,
                "unit": "mg"
              },
              "MG": {
                "label": "Magnesium",
                "quantity": 301.743,
                "unit": "mg"
              },
              "K": {
                "label": "Potassium",
                "quantity": 3335.411,
                "unit": "mg"
              },
              "FE": {
                "label": "Iron",
                "quantity": 9.98134,
                "unit": "mg"
              },
              "ZN": {
                "label": "Zinc",
                "quantity": 5.42591,
                "unit": "mg"
              },
              "P": {
                "label": "Phosphorus",
                "quantity": 713.753,
                "unit": "mg"
              },
              "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 2821.091,
                "unit": "µg"
              },
              "VITC": {
                "label": "Vitamin C",
                "quantity": 63.363,
                "unit": "mg"
              },
              "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 0.8923160000000001,
                "unit": "mg"
              },
              "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 0.80716,
                "unit": "mg"
              },
              "NIA": {
                "label": "Niacin (B3)",
                "quantity": 9.426247000000002,
                "unit": "mg"
              },
              "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 1.513153,
                "unit": "mg"
              },
              "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 1094.155,
                "unit": "µg"
              },
              "FOLFD": {
                "label": "Folate (food)",
                "quantity": 1079.296,
                "unit": "µg"
              },
              "FOLAC": {
                "label": "Folic acid",
                "quantity": 9.143999999999998,
                "unit": "µg"
              },
              "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 10.26399,
                "unit": "mg"
              },
              "VITK1": {
                "label": "Vitamin K",
                "quantity": 700.3826000000001,
                "unit": "µg"
              },
              "WATER": {
                "label": "Water",
                "quantity": 919.3891,
                "unit": "g"
              }
            },
            "totalDaily": {
              "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 62.3473,
                "unit": "%"
              },
              "FAT": {
                "label": "Fat",
                "quantity": 102.7709076923077,
                "unit": "%"
              },
              "FASAT": {
                "label": "Saturated",
                "quantity": 53.04912499999999,
                "unit": "%"
              },
              "CHOCDF": {
                "label": "Carbs",
                "quantity": 50.65932999999999,
                "unit": "%"
              },
              "FIBTG": {
                "label": "Fiber",
                "quantity": 149.8548,
                "unit": "%"
              },
              "PROCNT": {
                "label": "Protein",
                "quantity": 48.39642,
                "unit": "%"
              },
              "NA": {
                "label": "Sodium",
                "quantity": 42.6685,
                "unit": "%"
              },
              "CA": {
                "label": "Calcium",
                "quantity": 42.55,
                "unit": "%"
              },
              "MG": {
                "label": "Magnesium",
                "quantity": 71.84357142857142,
                "unit": "%"
              },
              "K": {
                "label": "Potassium",
                "quantity": 70.96619148936169,
                "unit": "%"
              },
              "FE": {
                "label": "Iron",
                "quantity": 55.45188888888888,
                "unit": "%"
              },
              "ZN": {
                "label": "Zinc",
                "quantity": 49.326454545454546,
                "unit": "%"
              },
              "P": {
                "label": "Phosphorus",
                "quantity": 101.9647142857143,
                "unit": "%"
              },
              "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 313.45455555555554,
                "unit": "%"
              },
              "VITC": {
                "label": "Vitamin C",
                "quantity": 70.40333333333334,
                "unit": "%"
              },
              "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 74.35966666666668,
                "unit": "%"
              },
              "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 62.08923076923076,
                "unit": "%"
              },
              "NIA": {
                "label": "Niacin (B3)",
                "quantity": 58.91404375000001,
                "unit": "%"
              },
              "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 116.39638461538462,
                "unit": "%"
              },
              "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 273.53875,
                "unit": "%"
              },
              "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 68.4266,
                "unit": "%"
              },
              "VITK1": {
                "label": "Vitamin K",
                "quantity": 583.6521666666667,
                "unit": "%"
              }
            },
            "digest": [
              {
                "label": "Fat",
                "tag": "FAT",
                "schemaOrgTag": "fatContent",
                "total": 66.80109,
                "hasRDI": true,
                "daily": 102.7709076923077,
                "unit": "g",
                "sub": [
                  {
                    "label": "Saturated",
                    "tag": "FASAT",
                    "schemaOrgTag": "saturatedFatContent",
                    "total": 10.609824999999999,
                    "hasRDI": true,
                    "daily": 53.04912499999999,
                    "unit": "g"
                  },
                  {
                    "label": "Trans",
                    "tag": "FATRN",
                    "schemaOrgTag": "transFatContent",
                    "total": 0.144732,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Monounsaturated",
                    "tag": "FAMS",
                    "schemaOrgTag": null,
                    "total": 32.768834999999996,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Polyunsaturated",
                    "tag": "FAPU",
                    "schemaOrgTag": null,
                    "total": 17.937825,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  }
                ]
              },
              {
                "label": "Carbs",
                "tag": "CHOCDF",
                "schemaOrgTag": "carbohydrateContent",
                "total": 151.97798999999998,
                "hasRDI": true,
                "daily": 50.65932999999999,
                "unit": "g",
                "sub": [
                  {
                    "label": "Carbs (net)",
                    "tag": "CHOCDF.net",
                    "schemaOrgTag": null,
                    "total": 114.51428999999997,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Fiber",
                    "tag": "FIBTG",
                    "schemaOrgTag": "fiberContent",
                    "total": 37.4637,
                    "hasRDI": true,
                    "daily": 149.8548,
                    "unit": "g"
                  },
                  {
                    "label": "Sugars",
                    "tag": "SUGAR",
                    "schemaOrgTag": "sugarContent",
                    "total": 16.621699999999997,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Sugars, added",
                    "tag": "SUGAR.added",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  }
                ]
              },
              {
                "label": "Protein",
                "tag": "PROCNT",
                "schemaOrgTag": "proteinContent",
                "total": 24.19821,
                "hasRDI": true,
                "daily": 48.39642,
                "unit": "g"
              },
              {
                "label": "Cholesterol",
                "tag": "CHOLE",
                "schemaOrgTag": "cholesterolContent",
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "mg"
              },
              {
                "label": "Sodium",
                "tag": "NA",
                "schemaOrgTag": "sodiumContent",
                "total": 1024.044,
                "hasRDI": true,
                "daily": 42.6685,
                "unit": "mg"
              },
              {
                "label": "Calcium",
                "tag": "CA",
                "schemaOrgTag": null,
                "total": 425.5,
                "hasRDI": true,
                "daily": 42.55,
                "unit": "mg"
              },
              {
                "label": "Magnesium",
                "tag": "MG",
                "schemaOrgTag": null,
                "total": 301.743,
                "hasRDI": true,
                "daily": 71.84357142857142,
                "unit": "mg"
              },
              {
                "label": "Potassium",
                "tag": "K",
                "schemaOrgTag": null,
                "total": 3335.411,
                "hasRDI": true,
                "daily": 70.96619148936169,
                "unit": "mg"
              },
              {
                "label": "Iron",
                "tag": "FE",
                "schemaOrgTag": null,
                "total": 9.98134,
                "hasRDI": true,
                "daily": 55.45188888888888,
                "unit": "mg"
              },
              {
                "label": "Zinc",
                "tag": "ZN",
                "schemaOrgTag": null,
                "total": 5.42591,
                "hasRDI": true,
                "daily": 49.326454545454546,
                "unit": "mg"
              },
              {
                "label": "Phosphorus",
                "tag": "P",
                "schemaOrgTag": null,
                "total": 713.753,
                "hasRDI": true,
                "daily": 101.9647142857143,
                "unit": "mg"
              },
              {
                "label": "Vitamin A",
                "tag": "VITA_RAE",
                "schemaOrgTag": null,
                "total": 2821.091,
                "hasRDI": true,
                "daily": 313.45455555555554,
                "unit": "µg"
              },
              {
                "label": "Vitamin C",
                "tag": "VITC",
                "schemaOrgTag": null,
                "total": 63.363,
                "hasRDI": true,
                "daily": 70.40333333333334,
                "unit": "mg"
              },
              {
                "label": "Thiamin (B1)",
                "tag": "THIA",
                "schemaOrgTag": null,
                "total": 0.8923160000000001,
                "hasRDI": true,
                "daily": 74.35966666666668,
                "unit": "mg"
              },
              {
                "label": "Riboflavin (B2)",
                "tag": "RIBF",
                "schemaOrgTag": null,
                "total": 0.80716,
                "hasRDI": true,
                "daily": 62.08923076923076,
                "unit": "mg"
              },
              {
                "label": "Niacin (B3)",
                "tag": "NIA",
                "schemaOrgTag": null,
                "total": 9.426247000000002,
                "hasRDI": true,
                "daily": 58.91404375000001,
                "unit": "mg"
              },
              {
                "label": "Vitamin B6",
                "tag": "VITB6A",
                "schemaOrgTag": null,
                "total": 1.513153,
                "hasRDI": true,
                "daily": 116.39638461538462,
                "unit": "mg"
              },
              {
                "label": "Folate equivalent (total)",
                "tag": "FOLDFE",
                "schemaOrgTag": null,
                "total": 1094.155,
                "hasRDI": true,
                "daily": 273.53875,
                "unit": "µg"
              },
              {
                "label": "Folate (food)",
                "tag": "FOLFD",
                "schemaOrgTag": null,
                "total": 1079.296,
                "hasRDI": false,
                "daily": 0,
                "unit": "µg"
              },
              {
                "label": "Folic acid",
                "tag": "FOLAC",
                "schemaOrgTag": null,
                "total": 9.143999999999998,
                "hasRDI": false,
                "daily": 0,
                "unit": "µg"
              },
              {
                "label": "Vitamin B12",
                "tag": "VITB12",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "µg"
              },
              {
                "label": "Vitamin D",
                "tag": "VITD",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "µg"
              },
              {
                "label": "Vitamin E",
                "tag": "TOCPHA",
                "schemaOrgTag": null,
                "total": 10.26399,
                "hasRDI": true,
                "daily": 68.4266,
                "unit": "mg"
              },
              {
                "label": "Vitamin K",
                "tag": "VITK1",
                "schemaOrgTag": null,
                "total": 700.3826000000001,
                "hasRDI": true,
                "daily": 583.6521666666667,
                "unit": "µg"
              },
              {
                "label": "Sugar alcohols",
                "tag": "Sugar.alcohol",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Water",
                "tag": "WATER",
                "schemaOrgTag": null,
                "total": 919.3891,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          "bookmarked": false,
          "bought": false
        },
        {
          "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_1356642cf7014c9ef725fe459a61fa9c",
            "label": "Chicken taco salad",
            "image": "https://www.edamam.com/web-img/acf/acfa5af7067eb97c423d570a7152085e.jpg",
            "source": "BBC Good Food",
            "url": "http://www.bbcgoodfood.com/recipes/chicken-taco-salad",
            "shareAs": "http://www.edamam.com/recipe/chicken-taco-salad-1356642cf7014c9ef725fe459a61fa9c/taco",
            "yield": 1,
            "dietLabels": [],
            "healthLabels": [
              "Peanut-Free",
              "Tree-Nut-Free",
              "Alcohol-Free"
            ],
            "cautions": [
              "Eggs",
              "Milk",
              "Sulfites"
            ],
            "ingredientLines": [
              "¼ tsp olive oil",
              "2 tbsp low-fat soured cream",
              "1 tsp white wine vinegar",
              "1 Baby Gem lettuce, shredded",
              "50g sweetcorn, drained",
              "5 cherry tomatoes, halved",
              "75g cooked BBQ chicken",
              "juice 1 lime",
              "½ small avocado, peeled and chopped",
              "1 corn taco shell, broken into pieces"
            ],
            "ingredients": [
              {
                "text": "¼ tsp olive oil",
                "weight": 1.125
              },
              {
                "text": "2 tbsp low-fat soured cream",
                "weight": 30
              },
              {
                "text": "1 tsp white wine vinegar",
                "weight": 5
              },
              {
                "text": "1 Baby Gem lettuce, shredded",
                "weight": 1.666666666666665
              },
              {
                "text": "50g sweetcorn, drained",
                "weight": 50
              },
              {
                "text": "5 cherry tomatoes, halved",
                "weight": 75
              },
              {
                "text": "75g cooked BBQ chicken",
                "weight": 75
              },
              {
                "text": "juice 1 lime",
                "weight": 67
              },
              {
                "text": "½ small avocado, peeled and chopped",
                "weight": 75.375
              },
              {
                "text": "1 corn taco shell, broken into pieces",
                "weight": 12.7
              }
            ],
            "calories": 533.4636666666668,
            "totalWeight": 392.8666666666666,
            "totalTime": 0,
            "totalNutrients": {
              "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 533.4636666666668,
                "unit": "kcal"
              },
              "FAT": {
                "label": "Fat",
                "quantity": 38.299971666666664,
                "unit": "g"
              },
              "FASAT": {
                "label": "Saturated",
                "quantity": 13.000970833333332,
                "unit": "g"
              },
              "FATRN": {
                "label": "Trans",
                "quantity": 0.09809400000000001,
                "unit": "g"
              },
              "FAMS": {
                "label": "Monounsaturated",
                "quantity": 17.225465833333335,
                "unit": "g"
              },
              "FAPU": {
                "label": "Polyunsaturated",
                "quantity": 5.36430875,
                "unit": "g"
              },
              "CHOCDF": {
                "label": "Carbs",
                "quantity": 34.698184166666664,
                "unit": "g"
              },
              "FIBTG": {
                "label": "Fiber",
                "quantity": 9.695358333333333,
                "unit": "g"
              },
              "SUGAR": {
                "label": "Sugars",
                "quantity": 7.777441666666666,
                "unit": "g"
              },
              "PROCNT": {
                "label": "Protein",
                "quantity": 19.673070000000003,
                "unit": "g"
              },
              "CHOLE": {
                "label": "Cholesterol",
                "quantity": 97.35,
                "unit": "mg"
              },
              "NA": {
                "label": "Sodium",
                "quantity": 123.12008333333335,
                "unit": "mg"
              },
              "CA": {
                "label": "Calcium",
                "quantity": 80.99958333333333,
                "unit": "mg"
              },
              "MG": {
                "label": "Magnesium",
                "quantity": 80.53641666666667,
                "unit": "mg"
              },
              "K": {
                "label": "Potassium",
                "quantity": 944.3236666666667,
                "unit": "mg"
              },
              "FE": {
                "label": "Iron",
                "quantity": 2.199809166666667,
                "unit": "mg"
              },
              "ZN": {
                "label": "Zinc",
                "quantity": 2.173403333333334,
                "unit": "mg"
              },
              "P": {
                "label": "Phosphorus",
                "quantity": 272.94599999999997,
                "unit": "mg"
              },
              "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 199.55991666666668,
                "unit": "µg"
              },
              "VITC": {
                "label": "Vitamin C",
                "quantity": 42.15116666666667,
                "unit": "mg"
              },
              "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 0.25583325,
                "unit": "mg"
              },
              "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 0.28733083333333337,
                "unit": "mg"
              },
              "NIA": {
                "label": "Niacin (B3)",
                "quantity": 8.1300265,
                "unit": "mg"
              },
              "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 0.6264714166666667,
                "unit": "mg"
              },
              "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 116.37541666666667,
                "unit": "µg"
              },
              "FOLFD": {
                "label": "Folate (food)",
                "quantity": 111.42241666666666,
                "unit": "µg"
              },
              "FOLAC": {
                "label": "Folic acid",
                "quantity": 3.048,
                "unit": "µg"
              },
              "VITB12": {
                "label": "Vitamin B12",
                "quantity": 0.2865,
                "unit": "µg"
              },
              "VITD": {
                "label": "Vitamin D",
                "quantity": 15.6,
                "unit": "IU"
              },
              "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 2.94273,
                "unit": "mg"
              },
              "VITK1": {
                "label": "Vitamin K",
                "quantity": 27.8652,
                "unit": "µg"
              },
              "WATER": {
                "label": "Water",
                "quantity": 297.19744583333335,
                "unit": "g"
              }
            },
            "totalDaily": {
              "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 26.673183333333338,
                "unit": "%"
              },
              "FAT": {
                "label": "Fat",
                "quantity": 58.92303333333333,
                "unit": "%"
              },
              "FASAT": {
                "label": "Saturated",
                "quantity": 65.00485416666666,
                "unit": "%"
              },
              "CHOCDF": {
                "label": "Carbs",
                "quantity": 11.566061388888889,
                "unit": "%"
              },
              "FIBTG": {
                "label": "Fiber",
                "quantity": 38.78143333333333,
                "unit": "%"
              },
              "PROCNT": {
                "label": "Protein",
                "quantity": 39.346140000000005,
                "unit": "%"
              },
              "CHOLE": {
                "label": "Cholesterol",
                "quantity": 32.45,
                "unit": "%"
              },
              "NA": {
                "label": "Sodium",
                "quantity": 5.1300034722222225,
                "unit": "%"
              },
              "CA": {
                "label": "Calcium",
                "quantity": 8.099958333333333,
                "unit": "%"
              },
              "MG": {
                "label": "Magnesium",
                "quantity": 19.1753373015873,
                "unit": "%"
              },
              "K": {
                "label": "Potassium",
                "quantity": 20.09199290780142,
                "unit": "%"
              },
              "FE": {
                "label": "Iron",
                "quantity": 12.221162037037038,
                "unit": "%"
              },
              "ZN": {
                "label": "Zinc",
                "quantity": 19.758212121212125,
                "unit": "%"
              },
              "P": {
                "label": "Phosphorus",
                "quantity": 38.992285714285714,
                "unit": "%"
              },
              "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 22.173324074074078,
                "unit": "%"
              },
              "VITC": {
                "label": "Vitamin C",
                "quantity": 46.83462962962963,
                "unit": "%"
              },
              "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 21.319437500000003,
                "unit": "%"
              },
              "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 22.102371794871797,
                "unit": "%"
              },
              "NIA": {
                "label": "Niacin (B3)",
                "quantity": 50.812665624999994,
                "unit": "%"
              },
              "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 48.19010897435898,
                "unit": "%"
              },
              "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 29.093854166666667,
                "unit": "%"
              },
              "VITB12": {
                "label": "Vitamin B12",
                "quantity": 11.9375,
                "unit": "%"
              },
              "VITD": {
                "label": "Vitamin D",
                "quantity": 104,
                "unit": "%"
              },
              "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 19.6182,
                "unit": "%"
              },
              "VITK1": {
                "label": "Vitamin K",
                "quantity": 23.221,
                "unit": "%"
              }
            },
            "digest": [
              {
                "label": "Fat",
                "tag": "FAT",
                "schemaOrgTag": "fatContent",
                "total": 38.299971666666664,
                "hasRDI": true,
                "daily": 58.92303333333333,
                "unit": "g",
                "sub": [
                  {
                    "label": "Saturated",
                    "tag": "FASAT",
                    "schemaOrgTag": "saturatedFatContent",
                    "total": 13.000970833333332,
                    "hasRDI": true,
                    "daily": 65.00485416666666,
                    "unit": "g"
                  },
                  {
                    "label": "Trans",
                    "tag": "FATRN",
                    "schemaOrgTag": "transFatContent",
                    "total": 0.09809400000000001,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Monounsaturated",
                    "tag": "FAMS",
                    "schemaOrgTag": null,
                    "total": 17.225465833333335,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Polyunsaturated",
                    "tag": "FAPU",
                    "schemaOrgTag": null,
                    "total": 5.36430875,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  }
                ]
              },
              {
                "label": "Carbs",
                "tag": "CHOCDF",
                "schemaOrgTag": "carbohydrateContent",
                "total": 34.698184166666664,
                "hasRDI": true,
                "daily": 11.566061388888889,
                "unit": "g",
                "sub": [
                  {
                    "label": "Carbs (net)",
                    "tag": "CHOCDF.net",
                    "schemaOrgTag": null,
                    "total": 25.002825833333333,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Fiber",
                    "tag": "FIBTG",
                    "schemaOrgTag": "fiberContent",
                    "total": 9.695358333333333,
                    "hasRDI": true,
                    "daily": 38.78143333333333,
                    "unit": "g"
                  },
                  {
                    "label": "Sugars",
                    "tag": "SUGAR",
                    "schemaOrgTag": "sugarContent",
                    "total": 7.777441666666666,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Sugars, added",
                    "tag": "SUGAR.added",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  }
                ]
              },
              {
                "label": "Protein",
                "tag": "PROCNT",
                "schemaOrgTag": "proteinContent",
                "total": 19.673070000000003,
                "hasRDI": true,
                "daily": 39.346140000000005,
                "unit": "g"
              },
              {
                "label": "Cholesterol",
                "tag": "CHOLE",
                "schemaOrgTag": "cholesterolContent",
                "total": 97.35,
                "hasRDI": true,
                "daily": 32.45,
                "unit": "mg"
              },
              {
                "label": "Sodium",
                "tag": "NA",
                "schemaOrgTag": "sodiumContent",
                "total": 123.12008333333335,
                "hasRDI": true,
                "daily": 5.1300034722222225,
                "unit": "mg"
              },
              {
                "label": "Calcium",
                "tag": "CA",
                "schemaOrgTag": null,
                "total": 80.99958333333333,
                "hasRDI": true,
                "daily": 8.099958333333333,
                "unit": "mg"
              },
              {
                "label": "Magnesium",
                "tag": "MG",
                "schemaOrgTag": null,
                "total": 80.53641666666667,
                "hasRDI": true,
                "daily": 19.1753373015873,
                "unit": "mg"
              },
              {
                "label": "Potassium",
                "tag": "K",
                "schemaOrgTag": null,
                "total": 944.3236666666667,
                "hasRDI": true,
                "daily": 20.09199290780142,
                "unit": "mg"
              },
              {
                "label": "Iron",
                "tag": "FE",
                "schemaOrgTag": null,
                "total": 2.199809166666667,
                "hasRDI": true,
                "daily": 12.221162037037038,
                "unit": "mg"
              },
              {
                "label": "Zinc",
                "tag": "ZN",
                "schemaOrgTag": null,
                "total": 2.173403333333334,
                "hasRDI": true,
                "daily": 19.758212121212125,
                "unit": "mg"
              },
              {
                "label": "Phosphorus",
                "tag": "P",
                "schemaOrgTag": null,
                "total": 272.94599999999997,
                "hasRDI": true,
                "daily": 38.992285714285714,
                "unit": "mg"
              },
              {
                "label": "Vitamin A",
                "tag": "VITA_RAE",
                "schemaOrgTag": null,
                "total": 199.55991666666668,
                "hasRDI": true,
                "daily": 22.173324074074078,
                "unit": "µg"
              },
              {
                "label": "Vitamin C",
                "tag": "VITC",
                "schemaOrgTag": null,
                "total": 42.15116666666667,
                "hasRDI": true,
                "daily": 46.83462962962963,
                "unit": "mg"
              },
              {
                "label": "Thiamin (B1)",
                "tag": "THIA",
                "schemaOrgTag": null,
                "total": 0.25583325,
                "hasRDI": true,
                "daily": 21.319437500000003,
                "unit": "mg"
              },
              {
                "label": "Riboflavin (B2)",
                "tag": "RIBF",
                "schemaOrgTag": null,
                "total": 0.28733083333333337,
                "hasRDI": true,
                "daily": 22.102371794871797,
                "unit": "mg"
              },
              {
                "label": "Niacin (B3)",
                "tag": "NIA",
                "schemaOrgTag": null,
                "total": 8.1300265,
                "hasRDI": true,
                "daily": 50.812665624999994,
                "unit": "mg"
              },
              {
                "label": "Vitamin B6",
                "tag": "VITB6A",
                "schemaOrgTag": null,
                "total": 0.6264714166666667,
                "hasRDI": true,
                "daily": 48.19010897435898,
                "unit": "mg"
              },
              {
                "label": "Folate equivalent (total)",
                "tag": "FOLDFE",
                "schemaOrgTag": null,
                "total": 116.37541666666667,
                "hasRDI": true,
                "daily": 29.093854166666667,
                "unit": "µg"
              },
              {
                "label": "Folate (food)",
                "tag": "FOLFD",
                "schemaOrgTag": null,
                "total": 111.42241666666666,
                "hasRDI": false,
                "daily": 0,
                "unit": "µg"
              },
              {
                "label": "Folic acid",
                "tag": "FOLAC",
                "schemaOrgTag": null,
                "total": 3.048,
                "hasRDI": false,
                "daily": 0,
                "unit": "µg"
              },
              {
                "label": "Vitamin B12",
                "tag": "VITB12",
                "schemaOrgTag": null,
                "total": 0.2865,
                "hasRDI": true,
                "daily": 11.9375,
                "unit": "µg"
              },
              {
                "label": "Vitamin D",
                "tag": "VITD",
                "schemaOrgTag": null,
                "total": 15.6,
                "hasRDI": true,
                "daily": 104,
                "unit": "µg"
              },
              {
                "label": "Vitamin E",
                "tag": "TOCPHA",
                "schemaOrgTag": null,
                "total": 2.94273,
                "hasRDI": true,
                "daily": 19.6182,
                "unit": "mg"
              },
              {
                "label": "Vitamin K",
                "tag": "VITK1",
                "schemaOrgTag": null,
                "total": 27.8652,
                "hasRDI": true,
                "daily": 23.221,
                "unit": "µg"
              },
              {
                "label": "Sugar alcohols",
                "tag": "Sugar.alcohol",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Water",
                "tag": "WATER",
                "schemaOrgTag": null,
                "total": 297.19744583333335,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          "bookmarked": false,
          "bought": false
        },
        {
          "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_e503325730b7cae64a51047a908cd255",
            "label": "Taco Pie",
            "image": "https://www.edamam.com/web-img/103/10367b44dbe1229b3f6e7d64d0f78db4.jpg",
            "source": "The Daily Meal",
            "url": "http://www.thedailymeal.com/recipes/taco-pie-recipe-8",
            "shareAs": "http://www.edamam.com/recipe/taco-pie-e503325730b7cae64a51047a908cd255/taco",
            "yield": 6,
            "dietLabels": [
              "Low-Carb"
            ],
            "healthLabels": [
              "Peanut-Free",
              "Tree-Nut-Free",
              "Alcohol-Free"
            ],
            "cautions": [
              "Eggs",
              "Milk",
              "Sulfites",
              "FODMAP"
            ],
            "ingredientLines": [
              "1   8-ounce tube refrigerated crescent rolls",
              "1  Pound   lean ground beef",
              "1  Ounce   taco seasoning mix",
              "3/4  Cups   water",
              "2  Cups   taco chips, crushed, divided",
              "2  Cups   sour cream",
              "1  Cup   shredded sharp Cheddar cheese, preferably Borden Cheese Sharp Cheddar Shreds"
            ],
            "ingredients": [
              {
                "text": "1   8-ounce tube refrigerated crescent rolls",
                "weight": 226.796185
              },
              {
                "text": "1  Pound   lean ground beef",
                "weight": 453.59237
              },
              {
                "text": "1  Ounce   taco seasoning mix",
                "weight": 28.349523125
              },
              {
                "text": "3/4  Cups   water",
                "weight": 177.75
              },
              {
                "text": "2  Cups   taco chips, crushed, divided",
                "weight": 25.4
              },
              {
                "text": "2  Cups   sour cream",
                "weight": 460
              },
              {
                "text": "1  Cup   shredded sharp Cheddar cheese, preferably Borden Cheese Sharp Cheddar Shreds",
                "weight": 113
              }
            ],
            "calories": 3375.4069063125003,
            "totalWeight": 1484.888078125,
            "totalTime": 0,
            "totalNutrients": {
              "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 3375.4069063125003,
                "unit": "kcal"
              },
              "FAT": {
                "label": "Fat",
                "quantity": 250.94642137900004,
                "unit": "g"
              },
              "FASAT": {
                "label": "Saturated",
                "quantity": 120.24015229920002,
                "unit": "g"
              },
              "FATRN": {
                "label": "Trans",
                "quantity": 8.724154394000001,
                "unit": "g"
              },
              "FAMS": {
                "label": "Monounsaturated",
                "quantity": 74.73178289760001,
                "unit": "g"
              },
              "FAPU": {
                "label": "Polyunsaturated",
                "quantity": 9.242236247700001,
                "unit": "g"
              },
              "CHOCDF": {
                "label": "Carbs",
                "quantity": 143.50434547100002,
                "unit": "g"
              },
              "FIBTG": {
                "label": "Fiber",
                "quantity": 8.874229350625,
                "unit": "g"
              },
              "SUGAR": {
                "label": "Sugars",
                "quantity": 27.448277864437504,
                "unit": "g"
              },
              "PROCNT": {
                "label": "Protein",
                "quantity": 131.44352346562502,
                "unit": "g"
              },
              "CHOLE": {
                "label": "Cholesterol",
                "quantity": 676.5105827000001,
                "unit": "mg"
              },
              "NA": {
                "label": "Sodium",
                "quantity": 5792.36044699375,
                "unit": "mg"
              },
              "CA": {
                "label": "Calcium",
                "quantity": 1433.2922491500003,
                "unit": "mg"
              },
              "MG": {
                "label": "Magnesium",
                "quantity": 176.4802029,
                "unit": "mg"
              },
              "K": {
                "label": "Potassium",
                "quantity": 2301.34863025,
                "unit": "mg"
              },
              "FE": {
                "label": "Iron",
                "quantity": 17.527248372000003,
                "unit": "mg"
              },
              "ZN": {
                "label": "Zinc",
                "quantity": 25.010776066000005,
                "unit": "mg"
              },
              "P": {
                "label": "Phosphorus",
                "quantity": 1839.3479446000003,
                "unit": "mg"
              },
              "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 1125.1876948000001,
                "unit": "µg"
              },
              "VITC": {
                "label": "Vitamin C",
                "quantity": 4.140000000000001,
                "unit": "mg"
              },
              "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 0.44601871909999996,
                "unit": "mg"
              },
              "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 1.9868644787,
                "unit": "mg"
              },
              "NIA": {
                "label": "Niacin (B3)",
                "quantity": 20.193037479900006,
                "unit": "mg"
              },
              "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 1.8342353551000001,
                "unit": "mg"
              },
              "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 114.92146590000002,
                "unit": "µg"
              },
              "FOLFD": {
                "label": "Folate (food)",
                "quantity": 105.01546590000001,
                "unit": "µg"
              },
              "FOLAC": {
                "label": "Folic acid",
                "quantity": 6.096,
                "unit": "µg"
              },
              "VITB12": {
                "label": "Vitamin B12",
                "quantity": 11.989276718000003,
                "unit": "µg"
              },
              "VITD": {
                "label": "Vitamin D",
                "quantity": 105.12777110000002,
                "unit": "IU"
              },
              "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 3.851767029000001,
                "unit": "mg"
              },
              "VITK1": {
                "label": "Vitamin K",
                "quantity": 21.906062660000003,
                "unit": "µg"
              },
              "WATER": {
                "label": "Water",
                "quantity": 927.809154159125,
                "unit": "g"
              }
            },
            "totalDaily": {
              "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 168.770345315625,
                "unit": "%"
              },
              "FAT": {
                "label": "Fat",
                "quantity": 386.0714175061539,
                "unit": "%"
              },
              "FASAT": {
                "label": "Saturated",
                "quantity": 601.200761496,
                "unit": "%"
              },
              "CHOCDF": {
                "label": "Carbs",
                "quantity": 47.834781823666674,
                "unit": "%"
              },
              "FIBTG": {
                "label": "Fiber",
                "quantity": 35.4969174025,
                "unit": "%"
              },
              "PROCNT": {
                "label": "Protein",
                "quantity": 262.88704693125004,
                "unit": "%"
              },
              "CHOLE": {
                "label": "Cholesterol",
                "quantity": 225.5035275666667,
                "unit": "%"
              },
              "NA": {
                "label": "Sodium",
                "quantity": 241.34835195807293,
                "unit": "%"
              },
              "CA": {
                "label": "Calcium",
                "quantity": 143.32922491500003,
                "unit": "%"
              },
              "MG": {
                "label": "Magnesium",
                "quantity": 42.01909592857143,
                "unit": "%"
              },
              "K": {
                "label": "Potassium",
                "quantity": 48.964864473404255,
                "unit": "%"
              },
              "FE": {
                "label": "Iron",
                "quantity": 97.37360206666669,
                "unit": "%"
              },
              "ZN": {
                "label": "Zinc",
                "quantity": 227.370691509091,
                "unit": "%"
              },
              "P": {
                "label": "Phosphorus",
                "quantity": 262.76399208571434,
                "unit": "%"
              },
              "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 125.0208549777778,
                "unit": "%"
              },
              "VITC": {
                "label": "Vitamin C",
                "quantity": 4.6000000000000005,
                "unit": "%"
              },
              "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 37.16822659166666,
                "unit": "%"
              },
              "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 152.8357291307692,
                "unit": "%"
              },
              "NIA": {
                "label": "Niacin (B3)",
                "quantity": 126.20648424937504,
                "unit": "%"
              },
              "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 141.09502731538464,
                "unit": "%"
              },
              "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 28.730366475000004,
                "unit": "%"
              },
              "VITB12": {
                "label": "Vitamin B12",
                "quantity": 499.5531965833335,
                "unit": "%"
              },
              "VITD": {
                "label": "Vitamin D",
                "quantity": 700.8518073333336,
                "unit": "%"
              },
              "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 25.678446860000005,
                "unit": "%"
              },
              "VITK1": {
                "label": "Vitamin K",
                "quantity": 18.25505221666667,
                "unit": "%"
              }
            },
            "digest": [
              {
                "label": "Fat",
                "tag": "FAT",
                "schemaOrgTag": "fatContent",
                "total": 250.94642137900004,
                "hasRDI": true,
                "daily": 386.0714175061539,
                "unit": "g",
                "sub": [
                  {
                    "label": "Saturated",
                    "tag": "FASAT",
                    "schemaOrgTag": "saturatedFatContent",
                    "total": 120.24015229920002,
                    "hasRDI": true,
                    "daily": 601.200761496,
                    "unit": "g"
                  },
                  {
                    "label": "Trans",
                    "tag": "FATRN",
                    "schemaOrgTag": "transFatContent",
                    "total": 8.724154394000001,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Monounsaturated",
                    "tag": "FAMS",
                    "schemaOrgTag": null,
                    "total": 74.73178289760001,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Polyunsaturated",
                    "tag": "FAPU",
                    "schemaOrgTag": null,
                    "total": 9.242236247700001,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  }
                ]
              },
              {
                "label": "Carbs",
                "tag": "CHOCDF",
                "schemaOrgTag": "carbohydrateContent",
                "total": 143.50434547100002,
                "hasRDI": true,
                "daily": 47.834781823666674,
                "unit": "g",
                "sub": [
                  {
                    "label": "Carbs (net)",
                    "tag": "CHOCDF.net",
                    "schemaOrgTag": null,
                    "total": 134.63011612037502,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Fiber",
                    "tag": "FIBTG",
                    "schemaOrgTag": "fiberContent",
                    "total": 8.874229350625,
                    "hasRDI": true,
                    "daily": 35.4969174025,
                    "unit": "g"
                  },
                  {
                    "label": "Sugars",
                    "tag": "SUGAR",
                    "schemaOrgTag": "sugarContent",
                    "total": 27.448277864437504,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Sugars, added",
                    "tag": "SUGAR.added",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  }
                ]
              },
              {
                "label": "Protein",
                "tag": "PROCNT",
                "schemaOrgTag": "proteinContent",
                "total": 131.44352346562502,
                "hasRDI": true,
                "daily": 262.88704693125004,
                "unit": "g"
              },
              {
                "label": "Cholesterol",
                "tag": "CHOLE",
                "schemaOrgTag": "cholesterolContent",
                "total": 676.5105827000001,
                "hasRDI": true,
                "daily": 225.5035275666667,
                "unit": "mg"
              },
              {
                "label": "Sodium",
                "tag": "NA",
                "schemaOrgTag": "sodiumContent",
                "total": 5792.36044699375,
                "hasRDI": true,
                "daily": 241.34835195807293,
                "unit": "mg"
              },
              {
                "label": "Calcium",
                "tag": "CA",
                "schemaOrgTag": null,
                "total": 1433.2922491500003,
                "hasRDI": true,
                "daily": 143.32922491500003,
                "unit": "mg"
              },
              {
                "label": "Magnesium",
                "tag": "MG",
                "schemaOrgTag": null,
                "total": 176.4802029,
                "hasRDI": true,
                "daily": 42.01909592857143,
                "unit": "mg"
              },
              {
                "label": "Potassium",
                "tag": "K",
                "schemaOrgTag": null,
                "total": 2301.34863025,
                "hasRDI": true,
                "daily": 48.964864473404255,
                "unit": "mg"
              },
              {
                "label": "Iron",
                "tag": "FE",
                "schemaOrgTag": null,
                "total": 17.527248372000003,
                "hasRDI": true,
                "daily": 97.37360206666669,
                "unit": "mg"
              },
              {
                "label": "Zinc",
                "tag": "ZN",
                "schemaOrgTag": null,
                "total": 25.010776066000005,
                "hasRDI": true,
                "daily": 227.370691509091,
                "unit": "mg"
              },
              {
                "label": "Phosphorus",
                "tag": "P",
                "schemaOrgTag": null,
                "total": 1839.3479446000003,
                "hasRDI": true,
                "daily": 262.76399208571434,
                "unit": "mg"
              },
              {
                "label": "Vitamin A",
                "tag": "VITA_RAE",
                "schemaOrgTag": null,
                "total": 1125.1876948000001,
                "hasRDI": true,
                "daily": 125.0208549777778,
                "unit": "µg"
              },
              {
                "label": "Vitamin C",
                "tag": "VITC",
                "schemaOrgTag": null,
                "total": 4.140000000000001,
                "hasRDI": true,
                "daily": 4.6000000000000005,
                "unit": "mg"
              },
              {
                "label": "Thiamin (B1)",
                "tag": "THIA",
                "schemaOrgTag": null,
                "total": 0.44601871909999996,
                "hasRDI": true,
                "daily": 37.16822659166666,
                "unit": "mg"
              },
              {
                "label": "Riboflavin (B2)",
                "tag": "RIBF",
                "schemaOrgTag": null,
                "total": 1.9868644787,
                "hasRDI": true,
                "daily": 152.8357291307692,
                "unit": "mg"
              },
              {
                "label": "Niacin (B3)",
                "tag": "NIA",
                "schemaOrgTag": null,
                "total": 20.193037479900006,
                "hasRDI": true,
                "daily": 126.20648424937504,
                "unit": "mg"
              },
              {
                "label": "Vitamin B6",
                "tag": "VITB6A",
                "schemaOrgTag": null,
                "total": 1.8342353551000001,
                "hasRDI": true,
                "daily": 141.09502731538464,
                "unit": "mg"
              },
              {
                "label": "Folate equivalent (total)",
                "tag": "FOLDFE",
                "schemaOrgTag": null,
                "total": 114.92146590000002,
                "hasRDI": true,
                "daily": 28.730366475000004,
                "unit": "µg"
              },
              {
                "label": "Folate (food)",
                "tag": "FOLFD",
                "schemaOrgTag": null,
                "total": 105.01546590000001,
                "hasRDI": false,
                "daily": 0,
                "unit": "µg"
              },
              {
                "label": "Folic acid",
                "tag": "FOLAC",
                "schemaOrgTag": null,
                "total": 6.096,
                "hasRDI": false,
                "daily": 0,
                "unit": "µg"
              },
              {
                "label": "Vitamin B12",
                "tag": "VITB12",
                "schemaOrgTag": null,
                "total": 11.989276718000003,
                "hasRDI": true,
                "daily": 499.5531965833335,
                "unit": "µg"
              },
              {
                "label": "Vitamin D",
                "tag": "VITD",
                "schemaOrgTag": null,
                "total": 105.12777110000002,
                "hasRDI": true,
                "daily": 700.8518073333336,
                "unit": "µg"
              },
              {
                "label": "Vitamin E",
                "tag": "TOCPHA",
                "schemaOrgTag": null,
                "total": 3.851767029000001,
                "hasRDI": true,
                "daily": 25.678446860000005,
                "unit": "mg"
              },
              {
                "label": "Vitamin K",
                "tag": "VITK1",
                "schemaOrgTag": null,
                "total": 21.906062660000003,
                "hasRDI": true,
                "daily": 18.25505221666667,
                "unit": "µg"
              },
              {
                "label": "Sugar alcohols",
                "tag": "Sugar.alcohol",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Water",
                "tag": "WATER",
                "schemaOrgTag": null,
                "total": 927.809154159125,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          "bookmarked": false,
          "bought": false
        },
        {
          "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_ac034ca5fddb21fba511cb3c70d03f62",
            "label": "Vegetarian Taco Chili",
            "image": "https://www.edamam.com/web-img/0c7/0c779170c1307e86efa59e13b39eba18.png",
            "source": "Food52",
            "url": "https://food52.com/recipes/15992-vegetarian-taco-chili",
            "shareAs": "http://www.edamam.com/recipe/vegetarian-taco-chili-ac034ca5fddb21fba511cb3c70d03f62/taco",
            "yield": 8,
            "dietLabels": [],
            "healthLabels": [
              "Vegan",
              "Vegetarian",
              "Peanut-Free",
              "Tree-Nut-Free",
              "Alcohol-Free"
            ],
            "cautions": [
              "Sulfites",
              "FODMAP"
            ],
            "ingredientLines": [
              "2 tablespoons oil",
              "1 jalapeno, seeded and diced",
              "1 onion, diced",
              "2 cloves garlic, minced",
              "3/4 cups brown rice, uncooked",
              "1 package taco seasoning (or 1 tablespoon)",
              "1 (15 oz) can diced tomatoes",
              "1/2 cup salsa",
              "1 (15 oz) can black beans, rinsed and drained",
              "1 (15 oz) can kidney beans, rinsed and drained",
              "1 (11 oz) can corn, drained",
              "1 quart vegetable broth or water"
            ],
            "ingredients": [
              {
                "text": "2 tablespoons oil",
                "weight": 28
              },
              {
                "text": "1 jalapeno, seeded and diced",
                "weight": 14
              },
              {
                "text": "1 onion, diced",
                "weight": 125
              },
              {
                "text": "2 cloves garlic, minced",
                "weight": 6
              },
              {
                "text": "3/4 cups brown rice, uncooked",
                "weight": 142.5
              },
              {
                "text": "1 package taco seasoning (or 1 tablespoon)",
                "weight": 4.4
              },
              {
                "text": "1 (15 oz) can diced tomatoes",
                "weight": 425.242846875
              },
              {
                "text": "1/2 cup salsa",
                "weight": 130
              },
              {
                "text": "1 (15 oz) can black beans, rinsed and drained",
                "weight": 425.242846875
              },
              {
                "text": "1 (15 oz) can kidney beans, rinsed and drained",
                "weight": 425.242846875
              },
              {
                "text": "1 (11 oz) can corn, drained",
                "weight": 311.84475437500004
              },
              {
                "text": "1 quart vegetable broth or water",
                "weight": 908
              }
            ],
            "calories": 1919.9485702108204,
            "totalWeight": 2945.473295,
            "totalTime": 385,
            "totalNutrients": {
              "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 1919.9485702146203,
                "unit": "kcal"
              },
              "FAT": {
                "label": "Fat",
                "quantity": 42.0401903979925,
                "unit": "g"
              },
              "FASAT": {
                "label": "Saturated",
                "quantity": 4.695547921811251,
                "unit": "g"
              },
              "FATRN": {
                "label": "Trans",
                "quantity": 0.11060000000000002,
                "unit": "g"
              },
              "FAMS": {
                "label": "Monounsaturated",
                "quantity": 22.026029330827495,
                "unit": "g"
              },
              "FAPU": {
                "label": "Polyunsaturated",
                "quantity": 12.953046952555,
                "unit": "g"
              },
              "CHOCDF": {
                "label": "Carbs",
                "quantity": 329.855249917285,
                "unit": "g"
              },
              "FIBTG": {
                "label": "Fiber",
                "quantity": 73.58804672196999,
                "unit": "g"
              },
              "SUGAR": {
                "label": "Sugars",
                "quantity": 38.85899016030749,
                "unit": "g"
              },
              "PROCNT": {
                "label": "Protein",
                "quantity": 73.70500486777001,
                "unit": "g"
              },
              "NA": {
                "label": "Sodium",
                "quantity": 3538.56758929875,
                "unit": "mg"
              },
              "CA": {
                "label": "Calcium",
                "quantity": 649.58742511267,
                "unit": "mg"
              },
              "MG": {
                "label": "Magnesium",
                "quantity": 607.76700374519,
                "unit": "mg"
              },
              "K": {
                "label": "Potassium",
                "quantity": 4640.956962851101,
                "unit": "mg"
              },
              "FE": {
                "label": "Iron",
                "quantity": 21.594811351459995,
                "unit": "mg"
              },
              "ZN": {
                "label": "Zinc",
                "quantity": 9.4416991674825,
                "unit": "mg"
              },
              "P": {
                "label": "Phosphorus",
                "quantity": 1541.6340004123097,
                "unit": "mg"
              },
              "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 175.87541655575995,
                "unit": "µg"
              },
              "VITC": {
                "label": "Vitamin C",
                "quantity": 109.95285769248999,
                "unit": "mg"
              },
              "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 4.3096030506875,
                "unit": "mg"
              },
              "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 1.1878945645574999,
                "unit": "mg"
              },
              "NIA": {
                "label": "Niacin (B3)",
                "quantity": 18.400372153602497,
                "unit": "mg"
              },
              "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 2.54097493464375,
                "unit": "mg"
              },
              "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 631.3582505145899,
                "unit": "µg"
              },
              "FOLFD": {
                "label": "Folate (food)",
                "quantity": 631.3582505145899,
                "unit": "µg"
              },
              "VITB12": {
                "label": "Vitamin B12",
                "quantity": 0.000554788,
                "unit": "µg"
              },
              "VITD": {
                "label": "Vitamin D",
                "quantity": 0.1119770116,
                "unit": "IU"
              },
              "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 12.619091943585003,
                "unit": "mg"
              },
              "VITK1": {
                "label": "Vitamin K",
                "quantity": 117.53068202553501,
                "unit": "µg"
              },
              "WATER": {
                "label": "Water",
                "quantity": 2473.5230314729874,
                "unit": "g"
              }
            },
            "totalDaily": {
              "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 95.99742851073101,
                "unit": "%"
              },
              "FAT": {
                "label": "Fat",
                "quantity": 64.67721599691154,
                "unit": "%"
              },
              "FASAT": {
                "label": "Saturated",
                "quantity": 23.477739609056254,
                "unit": "%"
              },
              "CHOCDF": {
                "label": "Carbs",
                "quantity": 109.95174997242832,
                "unit": "%"
              },
              "FIBTG": {
                "label": "Fiber",
                "quantity": 294.35218688787995,
                "unit": "%"
              },
              "PROCNT": {
                "label": "Protein",
                "quantity": 147.41000973554003,
                "unit": "%"
              },
              "NA": {
                "label": "Sodium",
                "quantity": 147.44031622078126,
                "unit": "%"
              },
              "CA": {
                "label": "Calcium",
                "quantity": 64.95874251126699,
                "unit": "%"
              },
              "MG": {
                "label": "Magnesium",
                "quantity": 144.70642946314047,
                "unit": "%"
              },
              "K": {
                "label": "Potassium",
                "quantity": 98.7437651670447,
                "unit": "%"
              },
              "FE": {
                "label": "Iron",
                "quantity": 119.97117417477774,
                "unit": "%"
              },
              "ZN": {
                "label": "Zinc",
                "quantity": 85.83362879529547,
                "unit": "%"
              },
              "P": {
                "label": "Phosphorus",
                "quantity": 220.23342863032994,
                "unit": "%"
              },
              "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 19.541712950639994,
                "unit": "%"
              },
              "VITC": {
                "label": "Vitamin C",
                "quantity": 122.16984188054442,
                "unit": "%"
              },
              "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 359.13358755729166,
                "unit": "%"
              },
              "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 91.37650496596153,
                "unit": "%"
              },
              "NIA": {
                "label": "Niacin (B3)",
                "quantity": 115.00232596001561,
                "unit": "%"
              },
              "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 195.45961035721152,
                "unit": "%"
              },
              "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 157.83956262864749,
                "unit": "%"
              },
              "VITB12": {
                "label": "Vitamin B12",
                "quantity": 0.023116166666666667,
                "unit": "%"
              },
              "VITD": {
                "label": "Vitamin D",
                "quantity": 0.7465134106666667,
                "unit": "%"
              },
              "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 84.12727962390002,
                "unit": "%"
              },
              "VITK1": {
                "label": "Vitamin K",
                "quantity": 97.94223502127917,
                "unit": "%"
              }
            },
            "digest": [
              {
                "label": "Fat",
                "tag": "FAT",
                "schemaOrgTag": "fatContent",
                "total": 42.0401903979925,
                "hasRDI": true,
                "daily": 64.67721599691154,
                "unit": "g",
                "sub": [
                  {
                    "label": "Saturated",
                    "tag": "FASAT",
                    "schemaOrgTag": "saturatedFatContent",
                    "total": 4.695547921811251,
                    "hasRDI": true,
                    "daily": 23.477739609056254,
                    "unit": "g"
                  },
                  {
                    "label": "Trans",
                    "tag": "FATRN",
                    "schemaOrgTag": "transFatContent",
                    "total": 0.11060000000000002,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Monounsaturated",
                    "tag": "FAMS",
                    "schemaOrgTag": null,
                    "total": 22.026029330827495,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Polyunsaturated",
                    "tag": "FAPU",
                    "schemaOrgTag": null,
                    "total": 12.953046952555,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  }
                ]
              },
              {
                "label": "Carbs",
                "tag": "CHOCDF",
                "schemaOrgTag": "carbohydrateContent",
                "total": 329.855249917285,
                "hasRDI": true,
                "daily": 109.95174997242832,
                "unit": "g",
                "sub": [
                  {
                    "label": "Carbs (net)",
                    "tag": "CHOCDF.net",
                    "schemaOrgTag": null,
                    "total": 256.267203195315,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Fiber",
                    "tag": "FIBTG",
                    "schemaOrgTag": "fiberContent",
                    "total": 73.58804672196999,
                    "hasRDI": true,
                    "daily": 294.35218688787995,
                    "unit": "g"
                  },
                  {
                    "label": "Sugars",
                    "tag": "SUGAR",
                    "schemaOrgTag": "sugarContent",
                    "total": 38.85899016030749,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Sugars, added",
                    "tag": "SUGAR.added",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  }
                ]
              },
              {
                "label": "Protein",
                "tag": "PROCNT",
                "schemaOrgTag": "proteinContent",
                "total": 73.70500486777001,
                "hasRDI": true,
                "daily": 147.41000973554003,
                "unit": "g"
              },
              {
                "label": "Cholesterol",
                "tag": "CHOLE",
                "schemaOrgTag": "cholesterolContent",
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "mg"
              },
              {
                "label": "Sodium",
                "tag": "NA",
                "schemaOrgTag": "sodiumContent",
                "total": 3538.56758929875,
                "hasRDI": true,
                "daily": 147.44031622078126,
                "unit": "mg"
              },
              {
                "label": "Calcium",
                "tag": "CA",
                "schemaOrgTag": null,
                "total": 649.58742511267,
                "hasRDI": true,
                "daily": 64.95874251126699,
                "unit": "mg"
              },
              {
                "label": "Magnesium",
                "tag": "MG",
                "schemaOrgTag": null,
                "total": 607.76700374519,
                "hasRDI": true,
                "daily": 144.70642946314047,
                "unit": "mg"
              },
              {
                "label": "Potassium",
                "tag": "K",
                "schemaOrgTag": null,
                "total": 4640.956962851101,
                "hasRDI": true,
                "daily": 98.7437651670447,
                "unit": "mg"
              },
              {
                "label": "Iron",
                "tag": "FE",
                "schemaOrgTag": null,
                "total": 21.594811351459995,
                "hasRDI": true,
                "daily": 119.97117417477774,
                "unit": "mg"
              },
              {
                "label": "Zinc",
                "tag": "ZN",
                "schemaOrgTag": null,
                "total": 9.4416991674825,
                "hasRDI": true,
                "daily": 85.83362879529547,
                "unit": "mg"
              },
              {
                "label": "Phosphorus",
                "tag": "P",
                "schemaOrgTag": null,
                "total": 1541.6340004123097,
                "hasRDI": true,
                "daily": 220.23342863032994,
                "unit": "mg"
              },
              {
                "label": "Vitamin A",
                "tag": "VITA_RAE",
                "schemaOrgTag": null,
                "total": 175.87541655575995,
                "hasRDI": true,
                "daily": 19.541712950639994,
                "unit": "µg"
              },
              {
                "label": "Vitamin C",
                "tag": "VITC",
                "schemaOrgTag": null,
                "total": 109.95285769248999,
                "hasRDI": true,
                "daily": 122.16984188054442,
                "unit": "mg"
              },
              {
                "label": "Thiamin (B1)",
                "tag": "THIA",
                "schemaOrgTag": null,
                "total": 4.3096030506875,
                "hasRDI": true,
                "daily": 359.13358755729166,
                "unit": "mg"
              },
              {
                "label": "Riboflavin (B2)",
                "tag": "RIBF",
                "schemaOrgTag": null,
                "total": 1.1878945645574999,
                "hasRDI": true,
                "daily": 91.37650496596153,
                "unit": "mg"
              },
              {
                "label": "Niacin (B3)",
                "tag": "NIA",
                "schemaOrgTag": null,
                "total": 18.400372153602497,
                "hasRDI": true,
                "daily": 115.00232596001561,
                "unit": "mg"
              },
              {
                "label": "Vitamin B6",
                "tag": "VITB6A",
                "schemaOrgTag": null,
                "total": 2.54097493464375,
                "hasRDI": true,
                "daily": 195.45961035721152,
                "unit": "mg"
              },
              {
                "label": "Folate equivalent (total)",
                "tag": "FOLDFE",
                "schemaOrgTag": null,
                "total": 631.3582505145899,
                "hasRDI": true,
                "daily": 157.83956262864749,
                "unit": "µg"
              },
              {
                "label": "Folate (food)",
                "tag": "FOLFD",
                "schemaOrgTag": null,
                "total": 631.3582505145899,
                "hasRDI": false,
                "daily": 0,
                "unit": "µg"
              },
              {
                "label": "Folic acid",
                "tag": "FOLAC",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "µg"
              },
              {
                "label": "Vitamin B12",
                "tag": "VITB12",
                "schemaOrgTag": null,
                "total": 0.000554788,
                "hasRDI": true,
                "daily": 0.023116166666666667,
                "unit": "µg"
              },
              {
                "label": "Vitamin D",
                "tag": "VITD",
                "schemaOrgTag": null,
                "total": 0.1119770116,
                "hasRDI": true,
                "daily": 0.7465134106666667,
                "unit": "µg"
              },
              {
                "label": "Vitamin E",
                "tag": "TOCPHA",
                "schemaOrgTag": null,
                "total": 12.619091943585003,
                "hasRDI": true,
                "daily": 84.12727962390002,
                "unit": "mg"
              },
              {
                "label": "Vitamin K",
                "tag": "VITK1",
                "schemaOrgTag": null,
                "total": 117.53068202553501,
                "hasRDI": true,
                "daily": 97.94223502127917,
                "unit": "µg"
              },
              {
                "label": "Sugar alcohols",
                "tag": "Sugar.alcohol",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Water",
                "tag": "WATER",
                "schemaOrgTag": null,
                "total": 2473.5230314729874,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          "bookmarked": false,
          "bought": false
        },
        {
          "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_7c24c4dd1d87427ca8b0dd75bceadf83",
            "label": "Taco Potatoes",
            "image": "https://www.edamam.com/web-img/487/487134d8949bf68526be65a36beff43e.jpeg",
            "source": "Food Network",
            "url": "https://www.foodnetwork.com/recipes/ree-drummond/taco-potatoes-2780315",
            "shareAs": "http://www.edamam.com/recipe/taco-potatoes-7c24c4dd1d87427ca8b0dd75bceadf83/taco",
            "yield": 12,
            "dietLabels": [],
            "healthLabels": [
              "Sugar-Conscious",
              "Vegan",
              "Vegetarian",
              "Peanut-Free",
              "Tree-Nut-Free",
              "Alcohol-Free"
            ],
            "cautions": [
              "Sulfites",
              "FODMAP"
            ],
            "ingredientLines": [
              "5 pounds russet potatoes, scrubbed and cut into large chunks",
              "1/2 cup olive oil",
              "1/4 cup taco seasoning"
            ],
            "ingredients": [
              {
                "text": "5 pounds russet potatoes, scrubbed and cut into large chunks",
                "weight": 2267.96185
              },
              {
                "text": "1/2 cup olive oil",
                "weight": 108
              },
              {
                "text": "1/4 cup taco seasoning",
                "weight": 34.19999999826534
              }
            ],
            "calories": 2856.533861494415,
            "totalWeight": 2410.1618499982656,
            "totalTime": 50,
            "totalNutrients": {
              "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 2856.533861494415,
                "unit": "kcal"
              },
              "FAT": {
                "label": "Fat",
                "quantity": 109.81436948,
                "unit": "g"
              },
              "FASAT": {
                "label": "Saturated",
                "quantity": 15.502310081000001,
                "unit": "g"
              },
              "FAMS": {
                "label": "Monounsaturated",
                "quantity": 78.843239237,
                "unit": "g"
              },
              "FAPU": {
                "label": "Polyunsaturated",
                "quantity": 12.3400635955,
                "unit": "g"
              },
              "CHOCDF": {
                "label": "Carbs",
                "quantity": 429.6567062939939,
                "unit": "g"
              },
              "FIBTG": {
                "label": "Fiber",
                "quantity": 34.03210404976929,
                "unit": "g"
              },
              "SUGAR": {
                "label": "Sugars",
                "quantity": 17.765223469812135,
                "unit": "g"
              },
              "PROCNT": {
                "label": "Protein",
                "quantity": 50.073383589921946,
                "unit": "g"
              },
              "NA": {
                "label": "Sodium",
                "quantity": 2578.9840923750526,
                "unit": "mg"
              },
              "CA": {
                "label": "Calcium",
                "quantity": 295.9150405,
                "unit": "mg"
              },
              "MG": {
                "label": "Magnesium",
                "quantity": 521.6312255,
                "unit": "mg"
              },
              "K": {
                "label": "Potassium",
                "quantity": 9800.480914482654,
                "unit": "mg"
              },
              "FE": {
                "label": "Iron",
                "quantity": 22.571671909875104,
                "unit": "mg"
              },
              "ZN": {
                "label": "Zinc",
                "quantity": 6.577089365,
                "unit": "mg"
              },
              "P": {
                "label": "Phosphorus",
                "quantity": 1247.3790175,
                "unit": "mg"
              },
              "VITC": {
                "label": "Vitamin C",
                "quantity": 129.27382545,
                "unit": "mg"
              },
              "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 1.859728717,
                "unit": "mg"
              },
              "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 0.7484274105000001,
                "unit": "mg"
              },
              "NIA": {
                "label": "Niacin (B3)",
                "quantity": 23.4734051475,
                "unit": "mg"
              },
              "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 7.824468382499999,
                "unit": "mg"
              },
              "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 317.514659,
                "unit": "µg"
              },
              "FOLFD": {
                "label": "Folate (food)",
                "quantity": 317.514659,
                "unit": "µg"
              },
              "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 15.724796185,
                "unit": "mg"
              },
              "VITK1": {
                "label": "Vitamin K",
                "quantity": 105.83931330000001,
                "unit": "µg"
              },
              "WATER": {
                "label": "Water",
                "quantity": 1784.113821729901,
                "unit": "g"
              }
            },
            "totalDaily": {
              "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 142.82669307472074,
                "unit": "%"
              },
              "FAT": {
                "label": "Fat",
                "quantity": 168.9451838153846,
                "unit": "%"
              },
              "FASAT": {
                "label": "Saturated",
                "quantity": 77.51155040500001,
                "unit": "%"
              },
              "CHOCDF": {
                "label": "Carbs",
                "quantity": 143.21890209799798,
                "unit": "%"
              },
              "FIBTG": {
                "label": "Fiber",
                "quantity": 136.12841619907715,
                "unit": "%"
              },
              "PROCNT": {
                "label": "Protein",
                "quantity": 100.14676717984388,
                "unit": "%"
              },
              "NA": {
                "label": "Sodium",
                "quantity": 107.45767051562719,
                "unit": "%"
              },
              "CA": {
                "label": "Calcium",
                "quantity": 29.591504049999998,
                "unit": "%"
              },
              "MG": {
                "label": "Magnesium",
                "quantity": 124.19791083333334,
                "unit": "%"
              },
              "K": {
                "label": "Potassium",
                "quantity": 208.52087052090752,
                "unit": "%"
              },
              "FE": {
                "label": "Iron",
                "quantity": 125.3981772770839,
                "unit": "%"
              },
              "ZN": {
                "label": "Zinc",
                "quantity": 59.7917215,
                "unit": "%"
              },
              "P": {
                "label": "Phosphorus",
                "quantity": 178.1970025,
                "unit": "%"
              },
              "VITC": {
                "label": "Vitamin C",
                "quantity": 143.63758383333334,
                "unit": "%"
              },
              "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 154.97739308333334,
                "unit": "%"
              },
              "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 57.57133926923077,
                "unit": "%"
              },
              "NIA": {
                "label": "Niacin (B3)",
                "quantity": 146.708782171875,
                "unit": "%"
              },
              "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 601.8821832692307,
                "unit": "%"
              },
              "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 79.37866475,
                "unit": "%"
              },
              "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 104.83197456666667,
                "unit": "%"
              },
              "VITK1": {
                "label": "Vitamin K",
                "quantity": 88.19942775000001,
                "unit": "%"
              }
            },
            "digest": [
              {
                "label": "Fat",
                "tag": "FAT",
                "schemaOrgTag": "fatContent",
                "total": 109.81436948,
                "hasRDI": true,
                "daily": 168.9451838153846,
                "unit": "g",
                "sub": [
                  {
                    "label": "Saturated",
                    "tag": "FASAT",
                    "schemaOrgTag": "saturatedFatContent",
                    "total": 15.502310081000001,
                    "hasRDI": true,
                    "daily": 77.51155040500001,
                    "unit": "g"
                  },
                  {
                    "label": "Trans",
                    "tag": "FATRN",
                    "schemaOrgTag": "transFatContent",
                    "total": 0,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Monounsaturated",
                    "tag": "FAMS",
                    "schemaOrgTag": null,
                    "total": 78.843239237,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Polyunsaturated",
                    "tag": "FAPU",
                    "schemaOrgTag": null,
                    "total": 12.3400635955,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  }
                ]
              },
              {
                "label": "Carbs",
                "tag": "CHOCDF",
                "schemaOrgTag": "carbohydrateContent",
                "total": 429.6567062939939,
                "hasRDI": true,
                "daily": 143.21890209799798,
                "unit": "g",
                "sub": [
                  {
                    "label": "Carbs (net)",
                    "tag": "CHOCDF.net",
                    "schemaOrgTag": null,
                    "total": 395.62460224422466,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Fiber",
                    "tag": "FIBTG",
                    "schemaOrgTag": "fiberContent",
                    "total": 34.03210404976929,
                    "hasRDI": true,
                    "daily": 136.12841619907715,
                    "unit": "g"
                  },
                  {
                    "label": "Sugars",
                    "tag": "SUGAR",
                    "schemaOrgTag": "sugarContent",
                    "total": 17.765223469812135,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Sugars, added",
                    "tag": "SUGAR.added",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  }
                ]
              },
              {
                "label": "Protein",
                "tag": "PROCNT",
                "schemaOrgTag": "proteinContent",
                "total": 50.073383589921946,
                "hasRDI": true,
                "daily": 100.14676717984388,
                "unit": "g"
              },
              {
                "label": "Cholesterol",
                "tag": "CHOLE",
                "schemaOrgTag": "cholesterolContent",
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "mg"
              },
              {
                "label": "Sodium",
                "tag": "NA",
                "schemaOrgTag": "sodiumContent",
                "total": 2578.9840923750526,
                "hasRDI": true,
                "daily": 107.45767051562719,
                "unit": "mg"
              },
              {
                "label": "Calcium",
                "tag": "CA",
                "schemaOrgTag": null,
                "total": 295.9150405,
                "hasRDI": true,
                "daily": 29.591504049999998,
                "unit": "mg"
              },
              {
                "label": "Magnesium",
                "tag": "MG",
                "schemaOrgTag": null,
                "total": 521.6312255,
                "hasRDI": true,
                "daily": 124.19791083333334,
                "unit": "mg"
              },
              {
                "label": "Potassium",
                "tag": "K",
                "schemaOrgTag": null,
                "total": 9800.480914482654,
                "hasRDI": true,
                "daily": 208.52087052090752,
                "unit": "mg"
              },
              {
                "label": "Iron",
                "tag": "FE",
                "schemaOrgTag": null,
                "total": 22.571671909875104,
                "hasRDI": true,
                "daily": 125.3981772770839,
                "unit": "mg"
              },
              {
                "label": "Zinc",
                "tag": "ZN",
                "schemaOrgTag": null,
                "total": 6.577089365,
                "hasRDI": true,
                "daily": 59.7917215,
                "unit": "mg"
              },
              {
                "label": "Phosphorus",
                "tag": "P",
                "schemaOrgTag": null,
                "total": 1247.3790175,
                "hasRDI": true,
                "daily": 178.1970025,
                "unit": "mg"
              },
              {
                "label": "Vitamin A",
                "tag": "VITA_RAE",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "µg"
              },
              {
                "label": "Vitamin C",
                "tag": "VITC",
                "schemaOrgTag": null,
                "total": 129.27382545,
                "hasRDI": true,
                "daily": 143.63758383333334,
                "unit": "mg"
              },
              {
                "label": "Thiamin (B1)",
                "tag": "THIA",
                "schemaOrgTag": null,
                "total": 1.859728717,
                "hasRDI": true,
                "daily": 154.97739308333334,
                "unit": "mg"
              },
              {
                "label": "Riboflavin (B2)",
                "tag": "RIBF",
                "schemaOrgTag": null,
                "total": 0.7484274105000001,
                "hasRDI": true,
                "daily": 57.57133926923077,
                "unit": "mg"
              },
              {
                "label": "Niacin (B3)",
                "tag": "NIA",
                "schemaOrgTag": null,
                "total": 23.4734051475,
                "hasRDI": true,
                "daily": 146.708782171875,
                "unit": "mg"
              },
              {
                "label": "Vitamin B6",
                "tag": "VITB6A",
                "schemaOrgTag": null,
                "total": 7.824468382499999,
                "hasRDI": true,
                "daily": 601.8821832692307,
                "unit": "mg"
              },
              {
                "label": "Folate equivalent (total)",
                "tag": "FOLDFE",
                "schemaOrgTag": null,
                "total": 317.514659,
                "hasRDI": true,
                "daily": 79.37866475,
                "unit": "µg"
              },
              {
                "label": "Folate (food)",
                "tag": "FOLFD",
                "schemaOrgTag": null,
                "total": 317.514659,
                "hasRDI": false,
                "daily": 0,
                "unit": "µg"
              },
              {
                "label": "Folic acid",
                "tag": "FOLAC",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "µg"
              },
              {
                "label": "Vitamin B12",
                "tag": "VITB12",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "µg"
              },
              {
                "label": "Vitamin D",
                "tag": "VITD",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "µg"
              },
              {
                "label": "Vitamin E",
                "tag": "TOCPHA",
                "schemaOrgTag": null,
                "total": 15.724796185,
                "hasRDI": true,
                "daily": 104.83197456666667,
                "unit": "mg"
              },
              {
                "label": "Vitamin K",
                "tag": "VITK1",
                "schemaOrgTag": null,
                "total": 105.83931330000001,
                "hasRDI": true,
                "daily": 88.19942775000001,
                "unit": "µg"
              },
              {
                "label": "Sugar alcohols",
                "tag": "Sugar.alcohol",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Water",
                "tag": "WATER",
                "schemaOrgTag": null,
                "total": 1784.113821729901,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          "bookmarked": false,
          "bought": false
        },
        {
          "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_2ef1d50053905db24aeda1f534f3e72f",
            "label": "Taco Seasoned Ground Beef",
            "image": "https://www.edamam.com/web-img/fe5/fe5edcf2eebd5a1a06be564b645e84b8.jpg",
            "source": "Closet Cooking",
            "url": "http://closetcooking.blogspot.com/2009/08/taco-seasoned-ground-beef.html",
            "shareAs": "http://www.edamam.com/recipe/taco-seasoned-ground-beef-2ef1d50053905db24aeda1f534f3e72f/taco",
            "yield": 6,
            "dietLabels": [
              "Low-Carb"
            ],
            "healthLabels": [
              "Sugar-Conscious",
              "Peanut-Free",
              "Tree-Nut-Free",
              "Alcohol-Free"
            ],
            "cautions": [
              "Gluten",
              "Wheat",
              "FODMAP"
            ],
            "ingredientLines": [
              "1 pound ground beef",
              "1 batch taco seasoning",
              "1 tsp cornstarch",
              "1 cup water"
            ],
            "ingredients": [
              {
                "text": "1 pound ground beef",
                "weight": 453.59237
              },
              {
                "text": "1 batch taco seasoning",
                "weight": 4.4
              },
              {
                "text": "1 tsp cornstarch",
                "weight": 2.6
              },
              {
                "text": "1 cup water",
                "weight": 237
              }
            ],
            "calories": 1175.5386198,
            "totalWeight": 697.5923700000001,
            "totalTime": 0,
            "totalNutrients": {
              "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 1175.5386198,
                "unit": "kcal"
              },
              "FAT": {
                "label": "Fat",
                "quantity": 91.05109400000002,
                "unit": "g"
              },
              "FASAT": {
                "label": "Saturated",
                "quantity": 34.5318315697,
                "unit": "g"
              },
              "FATRN": {
                "label": "Trans",
                "quantity": 5.3523899660000005,
                "unit": "g"
              },
              "FAMS": {
                "label": "Monounsaturated",
                "quantity": 40.18733289760001,
                "unit": "g"
              },
              "FAPU": {
                "label": "Polyunsaturated",
                "quantity": 2.4490502477000002,
                "unit": "g"
              },
              "CHOCDF": {
                "label": "Carbs",
                "quantity": 5.25898,
                "unit": "g"
              },
              "FIBTG": {
                "label": "Fiber",
                "quantity": 0.5206000000000001,
                "unit": "g"
              },
              "SUGAR": {
                "label": "Sugars",
                "quantity": 0.0792,
                "unit": "g"
              },
              "PROCNT": {
                "label": "Protein",
                "quantity": 78.31052992900001,
                "unit": "g"
              },
              "CHOLE": {
                "label": "Cholesterol",
                "quantity": 322.05058270000006,
                "unit": "mg"
              },
              "NA": {
                "label": "Sodium",
                "quantity": 310.27296420000005,
                "unit": "mg"
              },
              "CA": {
                "label": "Calcium",
                "quantity": 132.6326266,
                "unit": "mg"
              },
              "MG": {
                "label": "Magnesium",
                "quantity": 89.41470290000001,
                "unit": "mg"
              },
              "K": {
                "label": "Potassium",
                "quantity": 1254.873399,
                "unit": "mg"
              },
              "FE": {
                "label": "Iron",
                "quantity": 10.365111978,
                "unit": "mg"
              },
              "ZN": {
                "label": "Zinc",
                "quantity": 19.123581066000003,
                "unit": "mg"
              },
              "P": {
                "label": "Phosphorus",
                "quantity": 724.5379446000001,
                "unit": "mg"
              },
              "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 23.951694800000002,
                "unit": "µg"
              },
              "VITC": {
                "label": "Vitamin C",
                "quantity": 0.528,
                "unit": "mg"
              },
              "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 0.2066607191,
                "unit": "mg"
              },
              "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 0.6933284787,
                "unit": "mg"
              },
              "NIA": {
                "label": "Niacin (B3)",
                "quantity": 19.304029479900006,
                "unit": "mg"
              },
              "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 1.5231833551,
                "unit": "mg"
              },
              "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 37.8234659,
                "unit": "µg"
              },
              "FOLFD": {
                "label": "Folate (food)",
                "quantity": 37.8234659,
                "unit": "µg"
              },
              "VITB12": {
                "label": "Vitamin B12",
                "quantity": 9.706876718000002,
                "unit": "µg"
              },
              "VITD": {
                "label": "Vitamin D",
                "quantity": 13.6077711,
                "unit": "IU"
              },
              "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 0.8291870290000002,
                "unit": "mg"
              },
              "VITK1": {
                "label": "Vitamin K",
                "quantity": 43.60226266000001,
                "unit": "µg"
              },
              "WATER": {
                "label": "Water",
                "quantity": 518.0265593190001,
                "unit": "g"
              }
            },
            "totalDaily": {
              "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 58.77693099000001,
                "unit": "%"
              },
              "FAT": {
                "label": "Fat",
                "quantity": 140.07860615384618,
                "unit": "%"
              },
              "FASAT": {
                "label": "Saturated",
                "quantity": 172.6591578485,
                "unit": "%"
              },
              "CHOCDF": {
                "label": "Carbs",
                "quantity": 1.7529933333333334,
                "unit": "%"
              },
              "FIBTG": {
                "label": "Fiber",
                "quantity": 2.0824000000000003,
                "unit": "%"
              },
              "PROCNT": {
                "label": "Protein",
                "quantity": 156.62105985800002,
                "unit": "%"
              },
              "CHOLE": {
                "label": "Cholesterol",
                "quantity": 107.35019423333335,
                "unit": "%"
              },
              "NA": {
                "label": "Sodium",
                "quantity": 12.928040175000003,
                "unit": "%"
              },
              "CA": {
                "label": "Calcium",
                "quantity": 13.26326266,
                "unit": "%"
              },
              "MG": {
                "label": "Magnesium",
                "quantity": 21.28921497619048,
                "unit": "%"
              },
              "K": {
                "label": "Potassium",
                "quantity": 26.6994340212766,
                "unit": "%"
              },
              "FE": {
                "label": "Iron",
                "quantity": 57.58395543333333,
                "unit": "%"
              },
              "ZN": {
                "label": "Zinc",
                "quantity": 173.8507369636364,
                "unit": "%"
              },
              "P": {
                "label": "Phosphorus",
                "quantity": 103.50542065714286,
                "unit": "%"
              },
              "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 2.661299422222222,
                "unit": "%"
              },
              "VITC": {
                "label": "Vitamin C",
                "quantity": 0.5866666666666667,
                "unit": "%"
              },
              "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 17.221726591666666,
                "unit": "%"
              },
              "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 53.332959900000006,
                "unit": "%"
              },
              "NIA": {
                "label": "Niacin (B3)",
                "quantity": 120.65018424937503,
                "unit": "%"
              },
              "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 117.16795039230769,
                "unit": "%"
              },
              "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 9.455866475,
                "unit": "%"
              },
              "VITB12": {
                "label": "Vitamin B12",
                "quantity": 404.4531965833334,
                "unit": "%"
              },
              "VITD": {
                "label": "Vitamin D",
                "quantity": 90.718474,
                "unit": "%"
              },
              "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 5.5279135266666675,
                "unit": "%"
              },
              "VITK1": {
                "label": "Vitamin K",
                "quantity": 36.33521888333334,
                "unit": "%"
              }
            },
            "digest": [
              {
                "label": "Fat",
                "tag": "FAT",
                "schemaOrgTag": "fatContent",
                "total": 91.05109400000002,
                "hasRDI": true,
                "daily": 140.07860615384618,
                "unit": "g",
                "sub": [
                  {
                    "label": "Saturated",
                    "tag": "FASAT",
                    "schemaOrgTag": "saturatedFatContent",
                    "total": 34.5318315697,
                    "hasRDI": true,
                    "daily": 172.6591578485,
                    "unit": "g"
                  },
                  {
                    "label": "Trans",
                    "tag": "FATRN",
                    "schemaOrgTag": "transFatContent",
                    "total": 5.3523899660000005,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Monounsaturated",
                    "tag": "FAMS",
                    "schemaOrgTag": null,
                    "total": 40.18733289760001,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Polyunsaturated",
                    "tag": "FAPU",
                    "schemaOrgTag": null,
                    "total": 2.4490502477000002,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  }
                ]
              },
              {
                "label": "Carbs",
                "tag": "CHOCDF",
                "schemaOrgTag": "carbohydrateContent",
                "total": 5.25898,
                "hasRDI": true,
                "daily": 1.7529933333333334,
                "unit": "g",
                "sub": [
                  {
                    "label": "Carbs (net)",
                    "tag": "CHOCDF.net",
                    "schemaOrgTag": null,
                    "total": 4.73838,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Fiber",
                    "tag": "FIBTG",
                    "schemaOrgTag": "fiberContent",
                    "total": 0.5206000000000001,
                    "hasRDI": true,
                    "daily": 2.0824000000000003,
                    "unit": "g"
                  },
                  {
                    "label": "Sugars",
                    "tag": "SUGAR",
                    "schemaOrgTag": "sugarContent",
                    "total": 0.0792,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Sugars, added",
                    "tag": "SUGAR.added",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  }
                ]
              },
              {
                "label": "Protein",
                "tag": "PROCNT",
                "schemaOrgTag": "proteinContent",
                "total": 78.31052992900001,
                "hasRDI": true,
                "daily": 156.62105985800002,
                "unit": "g"
              },
              {
                "label": "Cholesterol",
                "tag": "CHOLE",
                "schemaOrgTag": "cholesterolContent",
                "total": 322.05058270000006,
                "hasRDI": true,
                "daily": 107.35019423333335,
                "unit": "mg"
              },
              {
                "label": "Sodium",
                "tag": "NA",
                "schemaOrgTag": "sodiumContent",
                "total": 310.27296420000005,
                "hasRDI": true,
                "daily": 12.928040175000003,
                "unit": "mg"
              },
              {
                "label": "Calcium",
                "tag": "CA",
                "schemaOrgTag": null,
                "total": 132.6326266,
                "hasRDI": true,
                "daily": 13.26326266,
                "unit": "mg"
              },
              {
                "label": "Magnesium",
                "tag": "MG",
                "schemaOrgTag": null,
                "total": 89.41470290000001,
                "hasRDI": true,
                "daily": 21.28921497619048,
                "unit": "mg"
              },
              {
                "label": "Potassium",
                "tag": "K",
                "schemaOrgTag": null,
                "total": 1254.873399,
                "hasRDI": true,
                "daily": 26.6994340212766,
                "unit": "mg"
              },
              {
                "label": "Iron",
                "tag": "FE",
                "schemaOrgTag": null,
                "total": 10.365111978,
                "hasRDI": true,
                "daily": 57.58395543333333,
                "unit": "mg"
              },
              {
                "label": "Zinc",
                "tag": "ZN",
                "schemaOrgTag": null,
                "total": 19.123581066000003,
                "hasRDI": true,
                "daily": 173.8507369636364,
                "unit": "mg"
              },
              {
                "label": "Phosphorus",
                "tag": "P",
                "schemaOrgTag": null,
                "total": 724.5379446000001,
                "hasRDI": true,
                "daily": 103.50542065714286,
                "unit": "mg"
              },
              {
                "label": "Vitamin A",
                "tag": "VITA_RAE",
                "schemaOrgTag": null,
                "total": 23.951694800000002,
                "hasRDI": true,
                "daily": 2.661299422222222,
                "unit": "µg"
              },
              {
                "label": "Vitamin C",
                "tag": "VITC",
                "schemaOrgTag": null,
                "total": 0.528,
                "hasRDI": true,
                "daily": 0.5866666666666667,
                "unit": "mg"
              },
              {
                "label": "Thiamin (B1)",
                "tag": "THIA",
                "schemaOrgTag": null,
                "total": 0.2066607191,
                "hasRDI": true,
                "daily": 17.221726591666666,
                "unit": "mg"
              },
              {
                "label": "Riboflavin (B2)",
                "tag": "RIBF",
                "schemaOrgTag": null,
                "total": 0.6933284787,
                "hasRDI": true,
                "daily": 53.332959900000006,
                "unit": "mg"
              },
              {
                "label": "Niacin (B3)",
                "tag": "NIA",
                "schemaOrgTag": null,
                "total": 19.304029479900006,
                "hasRDI": true,
                "daily": 120.65018424937503,
                "unit": "mg"
              },
              {
                "label": "Vitamin B6",
                "tag": "VITB6A",
                "schemaOrgTag": null,
                "total": 1.5231833551,
                "hasRDI": true,
                "daily": 117.16795039230769,
                "unit": "mg"
              },
              {
                "label": "Folate equivalent (total)",
                "tag": "FOLDFE",
                "schemaOrgTag": null,
                "total": 37.8234659,
                "hasRDI": true,
                "daily": 9.455866475,
                "unit": "µg"
              },
              {
                "label": "Folate (food)",
                "tag": "FOLFD",
                "schemaOrgTag": null,
                "total": 37.8234659,
                "hasRDI": false,
                "daily": 0,
                "unit": "µg"
              },
              {
                "label": "Folic acid",
                "tag": "FOLAC",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "µg"
              },
              {
                "label": "Vitamin B12",
                "tag": "VITB12",
                "schemaOrgTag": null,
                "total": 9.706876718000002,
                "hasRDI": true,
                "daily": 404.4531965833334,
                "unit": "µg"
              },
              {
                "label": "Vitamin D",
                "tag": "VITD",
                "schemaOrgTag": null,
                "total": 13.6077711,
                "hasRDI": true,
                "daily": 90.718474,
                "unit": "µg"
              },
              {
                "label": "Vitamin E",
                "tag": "TOCPHA",
                "schemaOrgTag": null,
                "total": 0.8291870290000002,
                "hasRDI": true,
                "daily": 5.5279135266666675,
                "unit": "mg"
              },
              {
                "label": "Vitamin K",
                "tag": "VITK1",
                "schemaOrgTag": null,
                "total": 43.60226266000001,
                "hasRDI": true,
                "daily": 36.33521888333334,
                "unit": "µg"
              },
              {
                "label": "Sugar alcohols",
                "tag": "Sugar.alcohol",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Water",
                "tag": "WATER",
                "schemaOrgTag": null,
                "total": 518.0265593190001,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          "bookmarked": false,
          "bought": false
        }
      ]
    },
    "status": 200,
    "statusText": "OK",
    "headers": {
      "cache-control": "private",
      "content-type": "application/json;charset=UTF-8",
      "expires": "Thu, 01 Jan 1970 00:00:00 UTC"
    },
    "config": {
      "url": "https://api.edamam.com/search?q=taco&app_id=063ab359&app_key=87537f8acf10951583c43ab5434ae1d5",
      "method": "get",
      "headers": {
        "Accept": "application/json, text/plain, */*"
      },
      "transformRequest": [
        null
      ],
      "transformResponse": [
        null
      ],
      "timeout": 0,
      "xsrfCookieName": "XSRF-TOKEN",
      "xsrfHeaderName": "X-XSRF-TOKEN",
      "maxContentLength": -1
    },
    "request": {}
  }