// This is a copy of a reponse recieved from the food API, when the URL "https://api.edamam.com/search?q=bell pepper sandwich grilled&app_id=063ab359&app_key=87537f8acf10951583c43ab5434ae1d5&health=vegetarian&health=peanut-free"
// Used the following variables 
// -- const appId = "063ab359";
// -- const appKey = "87537f8acf10951583c43ab5434ae1d5";
// -- const mainIngredient = "bell pepper";
// -- const dietaryRescritions = ["vegetarian", "peanut-free"];
// -- const recipeKeywords = ["sandwich", "grilled"];

const foodObject = {
    "data": {
      "q": "bell pepper sandwich grilled",
      "from": 0,
      "to": 10,
      "more": true,
      "count": 84,
      "hits": [
        {
          "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_cbafbff236c8be9cd6812c47666595a1",
            "label": "Grilling: Marinated Vegetable Sandwich Recipe",
            "image": "https://www.edamam.com/web-img/8a3/8a33d53b0b60be7603420ed81b190115.jpg",
            "source": "Serious Eats",
            "url": "http://www.seriouseats.com/recipes/2008/06/grilled-marinated-vegetable-sandwich-recipe.html",
            "shareAs": "http://www.edamam.com/recipe/grilling-marinated-vegetable-sandwich-recipe-cbafbff236c8be9cd6812c47666595a1/bell+pepper+sandwich+grilled/vegetarian/peanut-free",
            "yield": 10,
            "dietLabels": [],
            "healthLabels": [
              "Vegetarian",
              "Peanut-Free",
              "Tree-Nut-Free",
              "Alcohol-Free"
            ],
            "cautions": [
              "Sulfites"
            ],
            "ingredientLines": [
              "2 medium zucchini",
              "2 medium yellow squash",
              "1 medium eggplant",
              "2 red bell pepper",
              "1 green bell pepper",
              "1/3 cup olive oil",
              "Zest from 1 lemon",
              "Juice from 2 lemons",
              "1 teaspoon dried oregano",
              "1 teaspoon red pepper flakes",
              "Kosher salt and fresh ground black pepper to taste",
              "1 large Italian loaf, sliced into desired sandwich size",
              "Your favorite spreadable goat cheese"
            ],
            "ingredients": [
              {
                "text": "2 medium zucchini",
                "weight": 392
              },
              {
                "text": "2 medium yellow squash",
                "weight": 862
              },
              {
                "text": "1 medium eggplant",
                "weight": 548
              },
              {
                "text": "2 red bell pepper",
                "weight": 238
              },
              {
                "text": "1 green bell pepper",
                "weight": 116.28888888888889
              },
              {
                "text": "1/3 cup olive oil",
                "weight": 72
              },
              {
                "text": "Zest from 1 lemon",
                "weight": 58
              },
              {
                "text": "Juice from 2 lemons",
                "weight": 116
              },
              {
                "text": "1 teaspoon dried oregano",
                "weight": 1
              },
              {
                "text": "1 teaspoon red pepper flakes",
                "weight": 1.8
              },
              {
                "text": "Kosher salt and fresh ground black pepper to taste",
                "weight": 0
              },
              {
                "text": "Kosher salt and fresh ground black pepper to taste",
                "weight": 8.415266666666668
              },
              {
                "text": "1 large Italian loaf, sliced into desired sandwich size",
                "weight": 400
              },
              {
                "text": "Your favorite spreadable goat cheese",
                "weight": 0
              }
            ],
            "calories": 2445.914097111111,
            "totalWeight": 2813.504155555556,
            "totalTime": 0,
            "totalNutrients": {
              "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 2445.914097111111,
                "unit": "kcal"
              },
              "FAT": {
                "label": "Fat",
                "quantity": 91.16448880444446,
                "unit": "g"
              },
              "FASAT": {
                "label": "Saturated",
                "quantity": 14.449278067555557,
                "unit": "g"
              },
              "FAMS": {
                "label": "Monounsaturated",
                "quantity": 56.12549193177778,
                "unit": "g"
              },
              "FAPU": {
                "label": "Polyunsaturated",
                "quantity": 14.913693472444443,
                "unit": "g"
              },
              "CHOCDF": {
                "label": "Carbs",
                "quantity": 377.28810747777777,
                "unit": "g"
              },
              "FIBTG": {
                "label": "Fiber",
                "quantity": 58.98057357777779,
                "unit": "g"
              },
              "SUGAR": {
                "label": "Sugars",
                "quantity": 49.88221104000001,
                "unit": "g"
              },
              "PROCNT": {
                "label": "Protein",
                "quantity": 58.660410651111114,
                "unit": "g"
              },
              "NA": {
                "label": "Sodium",
                "quantity": 2540.58172,
                "unit": "mg"
              },
              "CA": {
                "label": "Calcium",
                "quantity": 838.6625202222223,
                "unit": "mg"
              },
              "MG": {
                "label": "Magnesium",
                "quantity": 605.0549948888888,
                "unit": "mg"
              },
              "K": {
                "label": "Potassium",
                "quantity": 6816.396449555557,
                "unit": "mg"
              },
              "FE": {
                "label": "Iron",
                "quantity": 24.696304615555558,
                "unit": "mg"
              },
              "ZN": {
                "label": "Zinc",
                "quantity": 7.714057228888889,
                "unit": "mg"
              },
              "P": {
                "label": "Phosphorus",
                "quantity": 1135.827899111111,
                "unit": "mg"
              },
              "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 636.752122,
                "unit": "µg"
              },
              "VITC": {
                "label": "Vitamin C",
                "quantity": 668.0844666666667,
                "unit": "mg"
              },
              "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 3.770087154666667,
                "unit": "mg"
              },
              "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 2.132070368888889,
                "unit": "mg"
              },
              "NIA": {
                "label": "Niacin (B3)",
                "quantity": 32.243851164666665,
                "unit": "mg"
              },
              "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 3.7900555371111113,
                "unit": "mg"
              },
              "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 1723.1374842222222,
                "unit": "µg"
              },
              "FOLFD": {
                "label": "Folate (food)",
                "quantity": 627.1374842222222,
                "unit": "µg"
              },
              "FOLAC": {
                "label": "Folic acid",
                "quantity": 644,
                "unit": "µg"
              },
              "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 18.86512766222222,
                "unit": "mg"
              },
              "VITK1": {
                "label": "Vitamin K",
                "quantity": 125.88556931111111,
                "unit": "µg"
              },
              "WATER": {
                "label": "Water",
                "quantity": 2261.6057800044446,
                "unit": "g"
              }
            },
            "totalDaily": {
              "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 122.29570485555556,
                "unit": "%"
              },
              "FAT": {
                "label": "Fat",
                "quantity": 140.25305969914533,
                "unit": "%"
              },
              "FASAT": {
                "label": "Saturated",
                "quantity": 72.2463903377778,
                "unit": "%"
              },
              "CHOCDF": {
                "label": "Carbs",
                "quantity": 125.76270249259258,
                "unit": "%"
              },
              "FIBTG": {
                "label": "Fiber",
                "quantity": 235.92229431111116,
                "unit": "%"
              },
              "PROCNT": {
                "label": "Protein",
                "quantity": 117.32082130222223,
                "unit": "%"
              },
              "NA": {
                "label": "Sodium",
                "quantity": 105.85757166666667,
                "unit": "%"
              },
              "CA": {
                "label": "Calcium",
                "quantity": 83.86625202222223,
                "unit": "%"
              },
              "MG": {
                "label": "Magnesium",
                "quantity": 144.06071306878306,
                "unit": "%"
              },
              "K": {
                "label": "Potassium",
                "quantity": 145.02971169267144,
                "unit": "%"
              },
              "FE": {
                "label": "Iron",
                "quantity": 137.201692308642,
                "unit": "%"
              },
              "ZN": {
                "label": "Zinc",
                "quantity": 70.12779298989898,
                "unit": "%"
              },
              "P": {
                "label": "Phosphorus",
                "quantity": 162.26112844444444,
                "unit": "%"
              },
              "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 70.75023577777777,
                "unit": "%"
              },
              "VITC": {
                "label": "Vitamin C",
                "quantity": 742.3160740740741,
                "unit": "%"
              },
              "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 314.1739295555556,
                "unit": "%"
              },
              "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 164.005412991453,
                "unit": "%"
              },
              "NIA": {
                "label": "Niacin (B3)",
                "quantity": 201.52406977916667,
                "unit": "%"
              },
              "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 291.5427336239316,
                "unit": "%"
              },
              "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 430.78437105555554,
                "unit": "%"
              },
              "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 125.76751774814814,
                "unit": "%"
              },
              "VITK1": {
                "label": "Vitamin K",
                "quantity": 104.90464109259258,
                "unit": "%"
              }
            },
            "digest": [
              {
                "label": "Fat",
                "tag": "FAT",
                "schemaOrgTag": "fatContent",
                "total": 91.16448880444446,
                "hasRDI": true,
                "daily": 140.25305969914533,
                "unit": "g",
                "sub": [
                  {
                    "label": "Saturated",
                    "tag": "FASAT",
                    "schemaOrgTag": "saturatedFatContent",
                    "total": 14.449278067555557,
                    "hasRDI": true,
                    "daily": 72.2463903377778,
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
                    "total": 56.12549193177778,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Polyunsaturated",
                    "tag": "FAPU",
                    "schemaOrgTag": null,
                    "total": 14.913693472444443,
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
                "total": 377.28810747777777,
                "hasRDI": true,
                "daily": 125.76270249259258,
                "unit": "g",
                "sub": [
                  {
                    "label": "Carbs (net)",
                    "tag": "CHOCDF.net",
                    "schemaOrgTag": null,
                    "total": 318.30753389999995,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Fiber",
                    "tag": "FIBTG",
                    "schemaOrgTag": "fiberContent",
                    "total": 58.98057357777779,
                    "hasRDI": true,
                    "daily": 235.92229431111116,
                    "unit": "g"
                  },
                  {
                    "label": "Sugars",
                    "tag": "SUGAR",
                    "schemaOrgTag": "sugarContent",
                    "total": 49.88221104000001,
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
                "total": 58.660410651111114,
                "hasRDI": true,
                "daily": 117.32082130222223,
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
                "total": 2540.58172,
                "hasRDI": true,
                "daily": 105.85757166666667,
                "unit": "mg"
              },
              {
                "label": "Calcium",
                "tag": "CA",
                "schemaOrgTag": null,
                "total": 838.6625202222223,
                "hasRDI": true,
                "daily": 83.86625202222223,
                "unit": "mg"
              },
              {
                "label": "Magnesium",
                "tag": "MG",
                "schemaOrgTag": null,
                "total": 605.0549948888888,
                "hasRDI": true,
                "daily": 144.06071306878306,
                "unit": "mg"
              },
              {
                "label": "Potassium",
                "tag": "K",
                "schemaOrgTag": null,
                "total": 6816.396449555557,
                "hasRDI": true,
                "daily": 145.02971169267144,
                "unit": "mg"
              },
              {
                "label": "Iron",
                "tag": "FE",
                "schemaOrgTag": null,
                "total": 24.696304615555558,
                "hasRDI": true,
                "daily": 137.201692308642,
                "unit": "mg"
              },
              {
                "label": "Zinc",
                "tag": "ZN",
                "schemaOrgTag": null,
                "total": 7.714057228888889,
                "hasRDI": true,
                "daily": 70.12779298989898,
                "unit": "mg"
              },
              {
                "label": "Phosphorus",
                "tag": "P",
                "schemaOrgTag": null,
                "total": 1135.827899111111,
                "hasRDI": true,
                "daily": 162.26112844444444,
                "unit": "mg"
              },
              {
                "label": "Vitamin A",
                "tag": "VITA_RAE",
                "schemaOrgTag": null,
                "total": 636.752122,
                "hasRDI": true,
                "daily": 70.75023577777777,
                "unit": "µg"
              },
              {
                "label": "Vitamin C",
                "tag": "VITC",
                "schemaOrgTag": null,
                "total": 668.0844666666667,
                "hasRDI": true,
                "daily": 742.3160740740741,
                "unit": "mg"
              },
              {
                "label": "Thiamin (B1)",
                "tag": "THIA",
                "schemaOrgTag": null,
                "total": 3.770087154666667,
                "hasRDI": true,
                "daily": 314.1739295555556,
                "unit": "mg"
              },
              {
                "label": "Riboflavin (B2)",
                "tag": "RIBF",
                "schemaOrgTag": null,
                "total": 2.132070368888889,
                "hasRDI": true,
                "daily": 164.005412991453,
                "unit": "mg"
              },
              {
                "label": "Niacin (B3)",
                "tag": "NIA",
                "schemaOrgTag": null,
                "total": 32.243851164666665,
                "hasRDI": true,
                "daily": 201.52406977916667,
                "unit": "mg"
              },
              {
                "label": "Vitamin B6",
                "tag": "VITB6A",
                "schemaOrgTag": null,
                "total": 3.7900555371111113,
                "hasRDI": true,
                "daily": 291.5427336239316,
                "unit": "mg"
              },
              {
                "label": "Folate equivalent (total)",
                "tag": "FOLDFE",
                "schemaOrgTag": null,
                "total": 1723.1374842222222,
                "hasRDI": true,
                "daily": 430.78437105555554,
                "unit": "µg"
              },
              {
                "label": "Folate (food)",
                "tag": "FOLFD",
                "schemaOrgTag": null,
                "total": 627.1374842222222,
                "hasRDI": false,
                "daily": 0,
                "unit": "µg"
              },
              {
                "label": "Folic acid",
                "tag": "FOLAC",
                "schemaOrgTag": null,
                "total": 644,
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
                "total": 18.86512766222222,
                "hasRDI": true,
                "daily": 125.76751774814814,
                "unit": "mg"
              },
              {
                "label": "Vitamin K",
                "tag": "VITK1",
                "schemaOrgTag": null,
                "total": 125.88556931111111,
                "hasRDI": true,
                "daily": 104.90464109259258,
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
                "total": 2261.6057800044446,
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
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_4502e768ff68aff63c3ee2bb86b464b2",
            "label": "Open-Faced Bell Pepper and Fontina Grilled Cheese",
            "image": "https://www.edamam.com/web-img/82c/82c94c1bed04f6663dd8a6b0df46fb19.jpg",
            "source": "Martha Stewart",
            "url": "https://www.marthastewart.com/1135143/open-faced-bell-pepper-and-fontina-grilled-cheese",
            "shareAs": "http://www.edamam.com/recipe/open-faced-bell-pepper-and-fontina-grilled-cheese-4502e768ff68aff63c3ee2bb86b464b2/bell+pepper+sandwich+grilled/vegetarian/peanut-free",
            "yield": 10,
            "dietLabels": [],
            "healthLabels": [
              "Sugar-Conscious",
              "Vegetarian",
              "Peanut-Free",
              "Tree-Nut-Free",
              "Alcohol-Free"
            ],
            "cautions": [
              "Sulfites"
            ],
            "ingredientLines": [
              "4 yellow bell peppers",
              "1 tablespoon white wine vinegar",
              "1/4 cup extra-virgin olive oil",
              "Coarse salt and freshly ground pepper",
              "1 tablespoon unsalted butter",
              "1 baguette, halved lengthwise",
              "6 ounces fontina cheese, grated (about 2 cups)"
            ],
            "ingredients": [
              {
                "text": "4 yellow bell peppers",
                "weight": 744
              },
              {
                "text": "1 tablespoon white wine vinegar",
                "weight": 14.9
              },
              {
                "text": "1/4 cup extra-virgin olive oil",
                "weight": 54
              },
              {
                "text": "Coarse salt and freshly ground pepper",
                "weight": 0
              },
              {
                "text": "Coarse salt and freshly ground pepper",
                "weight": 4.1733
              },
              {
                "text": "1 tablespoon unsalted butter",
                "weight": 14.2
              },
              {
                "text": "1 baguette, halved lengthwise",
                "weight": 300
              },
              {
                "text": "6 ounces fontina cheese, grated (about 2 cups)",
                "weight": 264
              }
            ],
            "calories": 2636.170983,
            "totalWeight": 1395.2733,
            "totalTime": 0,
            "totalNutrients": {
              "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 2636.170983,
                "unit": "kcal"
              },
              "FAT": {
                "label": "Fat",
                "quantity": 156.68566958000002,
                "unit": "g"
              },
              "FASAT": {
                "label": "Saturated",
                "quantity": 67.30374833600001,
                "unit": "g"
              },
              "FATRN": {
                "label": "Trans",
                "quantity": 0.48047599999999996,
                "unit": "g"
              },
              "FAMS": {
                "label": "Monounsaturated",
                "quantity": 66.434442687,
                "unit": "g"
              },
              "FAPU": {
                "label": "Polyunsaturated",
                "quantity": 13.087735534,
                "unit": "g"
              },
              "CHOCDF": {
                "label": "Carbs",
                "quantity": 209.43610535000002,
                "unit": "g"
              },
              "FIBTG": {
                "label": "Fiber",
                "quantity": 14.351844900000001,
                "unit": "g"
              },
              "SUGAR": {
                "label": "Sugars",
                "quantity": 17.99318912,
                "unit": "g"
              },
              "PROCNT": {
                "label": "Protein",
                "quantity": 107.82830587000001,
                "unit": "g"
              },
              "CHOLE": {
                "label": "Cholesterol",
                "quantity": 336.77,
                "unit": "mg"
              },
              "NA": {
                "label": "Sodium",
                "quantity": 3936.65466,
                "unit": "mg"
              },
              "CA": {
                "label": "Calcium",
                "quantity": 1713.169719,
                "unit": "mg"
              },
              "MG": {
                "label": "Magnesium",
                "quantity": 229.809343,
                "unit": "mg"
              },
              "K": {
                "label": "Potassium",
                "quantity": 2156.9491569999996,
                "unit": "mg"
              },
              "FE": {
                "label": "Iron",
                "quantity": 16.47453743,
                "unit": "mg"
              },
              "ZN": {
                "label": "Zinc",
                "quantity": 13.688732270000001,
                "unit": "mg"
              },
              "P": {
                "label": "Phosphorus",
                "quantity": 1417.5978140000002,
                "unit": "mg"
              },
              "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 861.6947910000001,
                "unit": "µg"
              },
              "VITC": {
                "label": "Vitamin C",
                "quantity": 1365.24,
                "unit": "mg"
              },
              "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 2.3989771639999997,
                "unit": "mg"
              },
              "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 2.01789994,
                "unit": "mg"
              },
              "NIA": {
                "label": "Niacin (B3)",
                "quantity": 21.522264819,
                "unit": "mg"
              },
              "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 1.802610303,
                "unit": "mg"
              },
              "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 720.415461,
                "unit": "µg"
              },
              "FOLFD": {
                "label": "Folate (food)",
                "quantity": 378.415461,
                "unit": "µg"
              },
              "FOLAC": {
                "label": "Folic acid",
                "quantity": 201,
                "unit": "µg"
              },
              "VITB12": {
                "label": "Vitamin B12",
                "quantity": 4.45934,
                "unit": "µg"
              },
              "VITD": {
                "label": "Vitamin D",
                "quantity": 69.24000000000001,
                "unit": "IU"
              },
              "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 9.464642320000001,
                "unit": "mg"
              },
              "VITK1": {
                "label": "Vitamin K",
                "quantity": 49.297692100000006,
                "unit": "µg"
              },
              "WATER": {
                "label": "Water",
                "quantity": 900.9272931799999,
                "unit": "g"
              }
            },
            "totalDaily": {
              "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 131.80854915,
                "unit": "%"
              },
              "FAT": {
                "label": "Fat",
                "quantity": 241.05487627692312,
                "unit": "%"
              },
              "FASAT": {
                "label": "Saturated",
                "quantity": 336.51874168000006,
                "unit": "%"
              },
              "CHOCDF": {
                "label": "Carbs",
                "quantity": 69.81203511666668,
                "unit": "%"
              },
              "FIBTG": {
                "label": "Fiber",
                "quantity": 57.407379600000006,
                "unit": "%"
              },
              "PROCNT": {
                "label": "Protein",
                "quantity": 215.65661174000002,
                "unit": "%"
              },
              "CHOLE": {
                "label": "Cholesterol",
                "quantity": 112.25666666666666,
                "unit": "%"
              },
              "NA": {
                "label": "Sodium",
                "quantity": 164.0272775,
                "unit": "%"
              },
              "CA": {
                "label": "Calcium",
                "quantity": 171.3169719,
                "unit": "%"
              },
              "MG": {
                "label": "Magnesium",
                "quantity": 54.71651023809524,
                "unit": "%"
              },
              "K": {
                "label": "Potassium",
                "quantity": 45.89253525531914,
                "unit": "%"
              },
              "FE": {
                "label": "Iron",
                "quantity": 91.52520794444446,
                "unit": "%"
              },
              "ZN": {
                "label": "Zinc",
                "quantity": 124.44302063636364,
                "unit": "%"
              },
              "P": {
                "label": "Phosphorus",
                "quantity": 202.51397342857143,
                "unit": "%"
              },
              "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 95.74386566666668,
                "unit": "%"
              },
              "VITC": {
                "label": "Vitamin C",
                "quantity": 1516.9333333333334,
                "unit": "%"
              },
              "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 199.91476366666666,
                "unit": "%"
              },
              "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 155.22307230769232,
                "unit": "%"
              },
              "NIA": {
                "label": "Niacin (B3)",
                "quantity": 134.51415511875,
                "unit": "%"
              },
              "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 138.662331,
                "unit": "%"
              },
              "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 180.10386525,
                "unit": "%"
              },
              "VITB12": {
                "label": "Vitamin B12",
                "quantity": 185.80583333333334,
                "unit": "%"
              },
              "VITD": {
                "label": "Vitamin D",
                "quantity": 461.6000000000001,
                "unit": "%"
              },
              "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 63.097615466666674,
                "unit": "%"
              },
              "VITK1": {
                "label": "Vitamin K",
                "quantity": 41.08141008333334,
                "unit": "%"
              }
            },
            "digest": [
              {
                "label": "Fat",
                "tag": "FAT",
                "schemaOrgTag": "fatContent",
                "total": 156.68566958000002,
                "hasRDI": true,
                "daily": 241.05487627692312,
                "unit": "g",
                "sub": [
                  {
                    "label": "Saturated",
                    "tag": "FASAT",
                    "schemaOrgTag": "saturatedFatContent",
                    "total": 67.30374833600001,
                    "hasRDI": true,
                    "daily": 336.51874168000006,
                    "unit": "g"
                  },
                  {
                    "label": "Trans",
                    "tag": "FATRN",
                    "schemaOrgTag": "transFatContent",
                    "total": 0.48047599999999996,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Monounsaturated",
                    "tag": "FAMS",
                    "schemaOrgTag": null,
                    "total": 66.434442687,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Polyunsaturated",
                    "tag": "FAPU",
                    "schemaOrgTag": null,
                    "total": 13.087735534,
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
                "total": 209.43610535000002,
                "hasRDI": true,
                "daily": 69.81203511666668,
                "unit": "g",
                "sub": [
                  {
                    "label": "Carbs (net)",
                    "tag": "CHOCDF.net",
                    "schemaOrgTag": null,
                    "total": 195.08426045000002,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Fiber",
                    "tag": "FIBTG",
                    "schemaOrgTag": "fiberContent",
                    "total": 14.351844900000001,
                    "hasRDI": true,
                    "daily": 57.407379600000006,
                    "unit": "g"
                  },
                  {
                    "label": "Sugars",
                    "tag": "SUGAR",
                    "schemaOrgTag": "sugarContent",
                    "total": 17.99318912,
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
                "total": 107.82830587000001,
                "hasRDI": true,
                "daily": 215.65661174000002,
                "unit": "g"
              },
              {
                "label": "Cholesterol",
                "tag": "CHOLE",
                "schemaOrgTag": "cholesterolContent",
                "total": 336.77,
                "hasRDI": true,
                "daily": 112.25666666666666,
                "unit": "mg"
              },
              {
                "label": "Sodium",
                "tag": "NA",
                "schemaOrgTag": "sodiumContent",
                "total": 3936.65466,
                "hasRDI": true,
                "daily": 164.0272775,
                "unit": "mg"
              },
              {
                "label": "Calcium",
                "tag": "CA",
                "schemaOrgTag": null,
                "total": 1713.169719,
                "hasRDI": true,
                "daily": 171.3169719,
                "unit": "mg"
              },
              {
                "label": "Magnesium",
                "tag": "MG",
                "schemaOrgTag": null,
                "total": 229.809343,
                "hasRDI": true,
                "daily": 54.71651023809524,
                "unit": "mg"
              },
              {
                "label": "Potassium",
                "tag": "K",
                "schemaOrgTag": null,
                "total": 2156.9491569999996,
                "hasRDI": true,
                "daily": 45.89253525531914,
                "unit": "mg"
              },
              {
                "label": "Iron",
                "tag": "FE",
                "schemaOrgTag": null,
                "total": 16.47453743,
                "hasRDI": true,
                "daily": 91.52520794444446,
                "unit": "mg"
              },
              {
                "label": "Zinc",
                "tag": "ZN",
                "schemaOrgTag": null,
                "total": 13.688732270000001,
                "hasRDI": true,
                "daily": 124.44302063636364,
                "unit": "mg"
              },
              {
                "label": "Phosphorus",
                "tag": "P",
                "schemaOrgTag": null,
                "total": 1417.5978140000002,
                "hasRDI": true,
                "daily": 202.51397342857143,
                "unit": "mg"
              },
              {
                "label": "Vitamin A",
                "tag": "VITA_RAE",
                "schemaOrgTag": null,
                "total": 861.6947910000001,
                "hasRDI": true,
                "daily": 95.74386566666668,
                "unit": "µg"
              },
              {
                "label": "Vitamin C",
                "tag": "VITC",
                "schemaOrgTag": null,
                "total": 1365.24,
                "hasRDI": true,
                "daily": 1516.9333333333334,
                "unit": "mg"
              },
              {
                "label": "Thiamin (B1)",
                "tag": "THIA",
                "schemaOrgTag": null,
                "total": 2.3989771639999997,
                "hasRDI": true,
                "daily": 199.91476366666666,
                "unit": "mg"
              },
              {
                "label": "Riboflavin (B2)",
                "tag": "RIBF",
                "schemaOrgTag": null,
                "total": 2.01789994,
                "hasRDI": true,
                "daily": 155.22307230769232,
                "unit": "mg"
              },
              {
                "label": "Niacin (B3)",
                "tag": "NIA",
                "schemaOrgTag": null,
                "total": 21.522264819,
                "hasRDI": true,
                "daily": 134.51415511875,
                "unit": "mg"
              },
              {
                "label": "Vitamin B6",
                "tag": "VITB6A",
                "schemaOrgTag": null,
                "total": 1.802610303,
                "hasRDI": true,
                "daily": 138.662331,
                "unit": "mg"
              },
              {
                "label": "Folate equivalent (total)",
                "tag": "FOLDFE",
                "schemaOrgTag": null,
                "total": 720.415461,
                "hasRDI": true,
                "daily": 180.10386525,
                "unit": "µg"
              },
              {
                "label": "Folate (food)",
                "tag": "FOLFD",
                "schemaOrgTag": null,
                "total": 378.415461,
                "hasRDI": false,
                "daily": 0,
                "unit": "µg"
              },
              {
                "label": "Folic acid",
                "tag": "FOLAC",
                "schemaOrgTag": null,
                "total": 201,
                "hasRDI": false,
                "daily": 0,
                "unit": "µg"
              },
              {
                "label": "Vitamin B12",
                "tag": "VITB12",
                "schemaOrgTag": null,
                "total": 4.45934,
                "hasRDI": true,
                "daily": 185.80583333333334,
                "unit": "µg"
              },
              {
                "label": "Vitamin D",
                "tag": "VITD",
                "schemaOrgTag": null,
                "total": 69.24000000000001,
                "hasRDI": true,
                "daily": 461.6000000000001,
                "unit": "µg"
              },
              {
                "label": "Vitamin E",
                "tag": "TOCPHA",
                "schemaOrgTag": null,
                "total": 9.464642320000001,
                "hasRDI": true,
                "daily": 63.097615466666674,
                "unit": "mg"
              },
              {
                "label": "Vitamin K",
                "tag": "VITK1",
                "schemaOrgTag": null,
                "total": 49.297692100000006,
                "hasRDI": true,
                "daily": 41.08141008333334,
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
                "total": 900.9272931799999,
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
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_9bdaaaf70601c047057a1d171e944084",
            "label": "Manchego, Grilled Red Pepper + Potato Sandwich With Paprika Mayo",
            "image": "https://www.edamam.com/web-img/e12/e12c686b7d4c037efeda3eaffdee54bb.jpg",
            "source": "Food52",
            "url": "http://food52.com/recipes/22900-manchego-grilled-red-pepper-potato-sandwich-with-paprika-mayo",
            "shareAs": "http://www.edamam.com/recipe/manchego-grilled-red-pepper-potato-sandwich-with-paprika-mayo-9bdaaaf70601c047057a1d171e944084/bell+pepper+sandwich+grilled/vegetarian/peanut-free",
            "yield": 4,
            "dietLabels": [],
            "healthLabels": [
              "Vegetarian",
              "Peanut-Free",
              "Tree-Nut-Free",
              "Alcohol-Free"
            ],
            "cautions": [
              "Sulfites"
            ],
            "ingredientLines": [
              "2 medium Yukon Gold potatoes (1 pound), sliced 1/4-inch thick",
              "4 red bell peppers, cut into planks",
              "1 tablespoon olive oil",
              "Kosher salt and freshly ground black pepper",
              "1/2 cup mayonnaise",
              "1 garlic clove, finely grated",
              "1/2 teaspoon white-wine vinegar",
              "1 teaspoon smoked paprika",
              "4 tablespoons butter, room temperature",
              "4 sandwich buns, split",
              "1 plum tomato, halved",
              "4 ounces Manchego, sliced"
            ],
            "ingredients": [
              {
                "text": "2 medium Yukon Gold potatoes (1 pound), sliced 1/4-inch thick",
                "weight": 453.59237
              },
              {
                "text": "4 red bell peppers, cut into planks",
                "weight": 476
              },
              {
                "text": "1 tablespoon olive oil",
                "weight": 13.5
              },
              {
                "text": "Kosher salt and freshly ground black pepper",
                "weight": 0
              },
              {
                "text": "Kosher salt and freshly ground black pepper",
                "weight": 4.5797713875
              },
              {
                "text": "1/2 cup mayonnaise",
                "weight": 115.5
              },
              {
                "text": "1 garlic clove, finely grated",
                "weight": 3
              },
              {
                "text": "1/2 teaspoon white-wine vinegar",
                "weight": 2.5
              },
              {
                "text": "1 teaspoon smoked paprika",
                "weight": 2.3
              },
              {
                "text": "4 tablespoons butter, room temperature",
                "weight": 56.8
              },
              {
                "text": "4 sandwich buns, split",
                "weight": 228
              },
              {
                "text": "1 plum tomato, halved",
                "weight": 62
              },
              {
                "text": "4 ounces Manchego, sliced",
                "weight": 113.3980925
              }
            ],
            "calories": 2860.4417048826253,
            "totalWeight": 1531.1702338875002,
            "totalTime": 0,
            "totalNutrients": {
              "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 2860.4417048826253,
                "unit": "kcal"
              },
              "FAT": {
                "label": "Fat",
                "quantity": 194.6251735284825,
                "unit": "g"
              },
              "FASAT": {
                "label": "Saturated",
                "quantity": 67.638313875389,
                "unit": "g"
              },
              "FATRN": {
                "label": "Trans",
                "quantity": 1.8619039999999998,
                "unit": "g"
              },
              "FAMS": {
                "label": "Monounsaturated",
                "quantity": 56.44845572450363,
                "unit": "g"
              },
              "FAPU": {
                "label": "Polyunsaturated",
                "quantity": 62.213803471197245,
                "unit": "g"
              },
              "CHOCDF": {
                "label": "Carbs",
                "quantity": 221.15028576430626,
                "unit": "g"
              },
              "FIBTG": {
                "label": "Fiber",
                "quantity": 25.4926562660375,
                "unit": "g"
              },
              "SUGAR": {
                "label": "Sugars",
                "quantity": 33.89425758413,
                "unit": "g"
              },
              "PROCNT": {
                "label": "Protein",
                "quantity": 60.489133684661255,
                "unit": "g"
              },
              "CHOLE": {
                "label": "Cholesterol",
                "quantity": 286.232997125,
                "unit": "mg"
              },
              "NA": {
                "label": "Sodium",
                "quantity": 3241.3970371025002,
                "unit": "mg"
              },
              "CA": {
                "label": "Calcium",
                "quantity": 1112.952729546625,
                "unit": "mg"
              },
              "MG": {
                "label": "Magnesium",
                "quantity": 249.332558797625,
                "unit": "mg"
              },
              "K": {
                "label": "Potassium",
                "quantity": 3067.566410489876,
                "unit": "mg"
              },
              "FE": {
                "label": "Iron",
                "quantity": 13.948712200976251,
                "unit": "mg"
              },
              "ZN": {
                "label": "Zinc",
                "quantity": 7.999326603761251,
                "unit": "mg"
              },
              "P": {
                "label": "Phosphorus",
                "quantity": 1096.81830766725,
                "unit": "mg"
              },
              "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 1292.332317474625,
                "unit": "µg"
              },
              "VITC": {
                "label": "Vitamin C",
                "quantity": 684.3209726675001,
                "unit": "mg"
              },
              "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 1.6860311935985002,
                "unit": "mg"
              },
              "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 1.5874697706224998,
                "unit": "mg"
              },
              "NIA": {
                "label": "Niacin (B3)",
                "quantity": 18.643757861409128,
                "unit": "mg"
              },
              "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 2.6727543568376246,
                "unit": "mg"
              },
              "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 631.8046264608748,
                "unit": "µg"
              },
              "FOLFD": {
                "label": "Folate (food)",
                "quantity": 321.72462646087496,
                "unit": "µg"
              },
              "FOLAC": {
                "label": "Folic acid",
                "quantity": 182.40000000000003,
                "unit": "µg"
              },
              "VITB12": {
                "label": "Vitamin B12",
                "quantity": 1.6614536765,
                "unit": "µg"
              },
              "VITD": {
                "label": "Vitamin D",
                "quantity": 59.02758035,
                "unit": "IU"
              },
              "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 13.116394090679998,
                "unit": "mg"
              },
              "VITK1": {
                "label": "Vitamin K",
                "quantity": 60.38662934633751,
                "unit": "µg"
              },
              "WATER": {
                "label": "Water",
                "quantity": 896.4174332888825,
                "unit": "g"
              }
            },
            "totalDaily": {
              "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 143.02208524413126,
                "unit": "%"
              },
              "FAT": {
                "label": "Fat",
                "quantity": 299.42334388997307,
                "unit": "%"
              },
              "FASAT": {
                "label": "Saturated",
                "quantity": 338.19156937694504,
                "unit": "%"
              },
              "CHOCDF": {
                "label": "Carbs",
                "quantity": 73.71676192143542,
                "unit": "%"
              },
              "FIBTG": {
                "label": "Fiber",
                "quantity": 101.97062506415001,
                "unit": "%"
              },
              "PROCNT": {
                "label": "Protein",
                "quantity": 120.97826736932251,
                "unit": "%"
              },
              "CHOLE": {
                "label": "Cholesterol",
                "quantity": 95.41099904166667,
                "unit": "%"
              },
              "NA": {
                "label": "Sodium",
                "quantity": 135.05820987927083,
                "unit": "%"
              },
              "CA": {
                "label": "Calcium",
                "quantity": 111.29527295466251,
                "unit": "%"
              },
              "MG": {
                "label": "Magnesium",
                "quantity": 59.36489495181548,
                "unit": "%"
              },
              "K": {
                "label": "Potassium",
                "quantity": 65.26737043595482,
                "unit": "%"
              },
              "FE": {
                "label": "Iron",
                "quantity": 77.49284556097918,
                "unit": "%"
              },
              "ZN": {
                "label": "Zinc",
                "quantity": 72.7211509432841,
                "unit": "%"
              },
              "P": {
                "label": "Phosphorus",
                "quantity": 156.68832966675,
                "unit": "%"
              },
              "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 143.59247971940277,
                "unit": "%"
              },
              "VITC": {
                "label": "Vitamin C",
                "quantity": 760.3566362972223,
                "unit": "%"
              },
              "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 140.50259946654168,
                "unit": "%"
              },
              "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 122.11305927865382,
                "unit": "%"
              },
              "NIA": {
                "label": "Niacin (B3)",
                "quantity": 116.52348663380705,
                "unit": "%"
              },
              "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 205.59648898750956,
                "unit": "%"
              },
              "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 157.9511566152187,
                "unit": "%"
              },
              "VITB12": {
                "label": "Vitamin B12",
                "quantity": 69.22723652083333,
                "unit": "%"
              },
              "VITD": {
                "label": "Vitamin D",
                "quantity": 393.51720233333333,
                "unit": "%"
              },
              "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 87.4426272712,
                "unit": "%"
              },
              "VITK1": {
                "label": "Vitamin K",
                "quantity": 50.32219112194792,
                "unit": "%"
              }
            },
            "digest": [
              {
                "label": "Fat",
                "tag": "FAT",
                "schemaOrgTag": "fatContent",
                "total": 194.6251735284825,
                "hasRDI": true,
                "daily": 299.42334388997307,
                "unit": "g",
                "sub": [
                  {
                    "label": "Saturated",
                    "tag": "FASAT",
                    "schemaOrgTag": "saturatedFatContent",
                    "total": 67.638313875389,
                    "hasRDI": true,
                    "daily": 338.19156937694504,
                    "unit": "g"
                  },
                  {
                    "label": "Trans",
                    "tag": "FATRN",
                    "schemaOrgTag": "transFatContent",
                    "total": 1.8619039999999998,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Monounsaturated",
                    "tag": "FAMS",
                    "schemaOrgTag": null,
                    "total": 56.44845572450363,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Polyunsaturated",
                    "tag": "FAPU",
                    "schemaOrgTag": null,
                    "total": 62.213803471197245,
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
                "total": 221.15028576430626,
                "hasRDI": true,
                "daily": 73.71676192143542,
                "unit": "g",
                "sub": [
                  {
                    "label": "Carbs (net)",
                    "tag": "CHOCDF.net",
                    "schemaOrgTag": null,
                    "total": 195.65762949826876,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Fiber",
                    "tag": "FIBTG",
                    "schemaOrgTag": "fiberContent",
                    "total": 25.4926562660375,
                    "hasRDI": true,
                    "daily": 101.97062506415001,
                    "unit": "g"
                  },
                  {
                    "label": "Sugars",
                    "tag": "SUGAR",
                    "schemaOrgTag": "sugarContent",
                    "total": 33.89425758413,
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
                "total": 60.489133684661255,
                "hasRDI": true,
                "daily": 120.97826736932251,
                "unit": "g"
              },
              {
                "label": "Cholesterol",
                "tag": "CHOLE",
                "schemaOrgTag": "cholesterolContent",
                "total": 286.232997125,
                "hasRDI": true,
                "daily": 95.41099904166667,
                "unit": "mg"
              },
              {
                "label": "Sodium",
                "tag": "NA",
                "schemaOrgTag": "sodiumContent",
                "total": 3241.3970371025002,
                "hasRDI": true,
                "daily": 135.05820987927083,
                "unit": "mg"
              },
              {
                "label": "Calcium",
                "tag": "CA",
                "schemaOrgTag": null,
                "total": 1112.952729546625,
                "hasRDI": true,
                "daily": 111.29527295466251,
                "unit": "mg"
              },
              {
                "label": "Magnesium",
                "tag": "MG",
                "schemaOrgTag": null,
                "total": 249.332558797625,
                "hasRDI": true,
                "daily": 59.36489495181548,
                "unit": "mg"
              },
              {
                "label": "Potassium",
                "tag": "K",
                "schemaOrgTag": null,
                "total": 3067.566410489876,
                "hasRDI": true,
                "daily": 65.26737043595482,
                "unit": "mg"
              },
              {
                "label": "Iron",
                "tag": "FE",
                "schemaOrgTag": null,
                "total": 13.948712200976251,
                "hasRDI": true,
                "daily": 77.49284556097918,
                "unit": "mg"
              },
              {
                "label": "Zinc",
                "tag": "ZN",
                "schemaOrgTag": null,
                "total": 7.999326603761251,
                "hasRDI": true,
                "daily": 72.7211509432841,
                "unit": "mg"
              },
              {
                "label": "Phosphorus",
                "tag": "P",
                "schemaOrgTag": null,
                "total": 1096.81830766725,
                "hasRDI": true,
                "daily": 156.68832966675,
                "unit": "mg"
              },
              {
                "label": "Vitamin A",
                "tag": "VITA_RAE",
                "schemaOrgTag": null,
                "total": 1292.332317474625,
                "hasRDI": true,
                "daily": 143.59247971940277,
                "unit": "µg"
              },
              {
                "label": "Vitamin C",
                "tag": "VITC",
                "schemaOrgTag": null,
                "total": 684.3209726675001,
                "hasRDI": true,
                "daily": 760.3566362972223,
                "unit": "mg"
              },
              {
                "label": "Thiamin (B1)",
                "tag": "THIA",
                "schemaOrgTag": null,
                "total": 1.6860311935985002,
                "hasRDI": true,
                "daily": 140.50259946654168,
                "unit": "mg"
              },
              {
                "label": "Riboflavin (B2)",
                "tag": "RIBF",
                "schemaOrgTag": null,
                "total": 1.5874697706224998,
                "hasRDI": true,
                "daily": 122.11305927865382,
                "unit": "mg"
              },
              {
                "label": "Niacin (B3)",
                "tag": "NIA",
                "schemaOrgTag": null,
                "total": 18.643757861409128,
                "hasRDI": true,
                "daily": 116.52348663380705,
                "unit": "mg"
              },
              {
                "label": "Vitamin B6",
                "tag": "VITB6A",
                "schemaOrgTag": null,
                "total": 2.6727543568376246,
                "hasRDI": true,
                "daily": 205.59648898750956,
                "unit": "mg"
              },
              {
                "label": "Folate equivalent (total)",
                "tag": "FOLDFE",
                "schemaOrgTag": null,
                "total": 631.8046264608748,
                "hasRDI": true,
                "daily": 157.9511566152187,
                "unit": "µg"
              },
              {
                "label": "Folate (food)",
                "tag": "FOLFD",
                "schemaOrgTag": null,
                "total": 321.72462646087496,
                "hasRDI": false,
                "daily": 0,
                "unit": "µg"
              },
              {
                "label": "Folic acid",
                "tag": "FOLAC",
                "schemaOrgTag": null,
                "total": 182.40000000000003,
                "hasRDI": false,
                "daily": 0,
                "unit": "µg"
              },
              {
                "label": "Vitamin B12",
                "tag": "VITB12",
                "schemaOrgTag": null,
                "total": 1.6614536765,
                "hasRDI": true,
                "daily": 69.22723652083333,
                "unit": "µg"
              },
              {
                "label": "Vitamin D",
                "tag": "VITD",
                "schemaOrgTag": null,
                "total": 59.02758035,
                "hasRDI": true,
                "daily": 393.51720233333333,
                "unit": "µg"
              },
              {
                "label": "Vitamin E",
                "tag": "TOCPHA",
                "schemaOrgTag": null,
                "total": 13.116394090679998,
                "hasRDI": true,
                "daily": 87.4426272712,
                "unit": "mg"
              },
              {
                "label": "Vitamin K",
                "tag": "VITK1",
                "schemaOrgTag": null,
                "total": 60.38662934633751,
                "hasRDI": true,
                "daily": 50.32219112194792,
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
                "total": 896.4174332888825,
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
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_f0cc529de45aa22cd2075444dafcbd7c",
            "label": "Grilled Portobello Sandwich",
            "image": "https://www.edamam.com/web-img/b14/b140daf0b4d0b3f111750c46f1f07501.jpg",
            "source": "Men's Health",
            "url": "https://www.menshealth.com/recipes/grilled-portobello-sandwich",
            "shareAs": "http://www.edamam.com/recipe/grilled-portobello-sandwich-f0cc529de45aa22cd2075444dafcbd7c/bell+pepper+sandwich+grilled/vegetarian/peanut-free",
            "yield": 4,
            "dietLabels": [
              "Low-Carb"
            ],
            "healthLabels": [
              "Sugar-Conscious",
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
              "1 portobello mushroom (4 oz)",
              "1/3 C light herb vinaigrette dressing",
              "1/2 large red bell pepper, sliced",
              "1 clove garlic, finely minced",
              "1 tbsp fat-free mayonnaise",
              "1 onion flavored sandwich roll",
              "1 slice reduced fat monterey jack cheese"
            ],
            "ingredients": [
              {
                "text": "1 portobello mushroom (4 oz)",
                "weight": 113.3980925
              },
              {
                "text": "1/3 C light herb vinaigrette dressing",
                "weight": 83.33333333333333
              },
              {
                "text": "1/2 large red bell pepper, sliced",
                "weight": 82
              },
              {
                "text": "1 clove garlic, finely minced",
                "weight": 3
              },
              {
                "text": "1 tbsp fat-free mayonnaise",
                "weight": 14.6
              },
              {
                "text": "1 onion flavored sandwich roll",
                "weight": 57
              },
              {
                "text": "1 slice reduced fat monterey jack cheese",
                "weight": 28
              }
            ],
            "calories": 800.7378196061667,
            "totalWeight": 381.33142583333336,
            "totalTime": 25,
            "totalNutrients": {
              "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 800.7378196061667,
                "unit": "kcal"
              },
              "FAT": {
                "label": "Fat",
                "quantity": 64.5673865240375,
                "unit": "g"
              },
              "FASAT": {
                "label": "Saturated",
                "quantity": 15.037041023168333,
                "unit": "g"
              },
              "FATRN": {
                "label": "Trans",
                "quantity": 0.004399845989,
                "unit": "g"
              },
              "FAMS": {
                "label": "Monounsaturated",
                "quantity": 18.27201256327833,
                "unit": "g"
              },
              "FAPU": {
                "label": "Polyunsaturated",
                "quantity": 28.253648828511583,
                "unit": "g"
              },
              "CHOCDF": {
                "label": "Carbs",
                "quantity": 42.50598432769083,
                "unit": "g"
              },
              "FIBTG": {
                "label": "Fiber",
                "quantity": 4.525949946425,
                "unit": "g"
              },
              "SUGAR": {
                "label": "Sugars",
                "quantity": 9.456137076458335,
                "unit": "g"
              },
              "PROCNT": {
                "label": "Protein",
                "quantity": 15.8209187591975,
                "unit": "g"
              },
              "CHOLE": {
                "label": "Cholesterol",
                "quantity": 30.614,
                "unit": "mg"
              },
              "NA": {
                "label": "Sodium",
                "quantity": 576.8449868085834,
                "unit": "mg"
              },
              "CA": {
                "label": "Calcium",
                "quantity": 277.49988449175004,
                "unit": "mg"
              },
              "MG": {
                "label": "Magnesium",
                "quantity": 33.540000000000006,
                "unit": "mg"
              },
              "K": {
                "label": "Potassium",
                "quantity": 676.3426516656667,
                "unit": "mg"
              },
              "FE": {
                "label": "Iron",
                "quantity": 2.8157880641475,
                "unit": "mg"
              },
              "ZN": {
                "label": "Zinc",
                "quantity": 2.1985795935425,
                "unit": "mg"
              },
              "P": {
                "label": "Phosphorus",
                "quantity": 326.025841703,
                "unit": "mg"
              },
              "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 184.18,
                "unit": "µg"
              },
              "VITC": {
                "label": "Vitamin C",
                "quantity": 105.65,
                "unit": "mg"
              },
              "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 0.39183772833775,
                "unit": "mg"
              },
              "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 0.5167149946425,
                "unit": "mg"
              },
              "NIA": {
                "label": "Niacin (B3)",
                "quantity": 8.2092769686415,
                "unit": "mg"
              },
              "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 0.48053430159300003,
                "unit": "mg"
              },
              "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 159.718921923,
                "unit": "µg"
              },
              "FOLFD": {
                "label": "Folate (food)",
                "quantity": 82.19892192300001,
                "unit": "µg"
              },
              "FOLAC": {
                "label": "Folic acid",
                "quantity": 45.60000000000001,
                "unit": "µg"
              },
              "VITB12": {
                "label": "Vitamin B12",
                "quantity": 0.2873980748625,
                "unit": "µg"
              },
              "VITD": {
                "label": "Vitamin D",
                "quantity": 17.159614972500002,
                "unit": "IU"
              },
              "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 5.473865896611667,
                "unit": "mg"
              },
              "VITK1": {
                "label": "Vitamin K",
                "quantity": 87.44433333333333,
                "unit": "µg"
              },
              "WATER": {
                "label": "Water",
                "quantity": 248.120826174745,
                "unit": "g"
              }
            },
            "totalDaily": {
              "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 40.036890980308335,
                "unit": "%"
              },
              "FAT": {
                "label": "Fat",
                "quantity": 99.33444080621155,
                "unit": "%"
              },
              "FASAT": {
                "label": "Saturated",
                "quantity": 75.18520511584167,
                "unit": "%"
              },
              "CHOCDF": {
                "label": "Carbs",
                "quantity": 14.16866144256361,
                "unit": "%"
              },
              "FIBTG": {
                "label": "Fiber",
                "quantity": 18.1037997857,
                "unit": "%"
              },
              "PROCNT": {
                "label": "Protein",
                "quantity": 31.641837518395,
                "unit": "%"
              },
              "CHOLE": {
                "label": "Cholesterol",
                "quantity": 10.204666666666666,
                "unit": "%"
              },
              "NA": {
                "label": "Sodium",
                "quantity": 24.03520778369097,
                "unit": "%"
              },
              "CA": {
                "label": "Calcium",
                "quantity": 27.749988449175007,
                "unit": "%"
              },
              "MG": {
                "label": "Magnesium",
                "quantity": 7.985714285714287,
                "unit": "%"
              },
              "K": {
                "label": "Potassium",
                "quantity": 14.390269184375889,
                "unit": "%"
              },
              "FE": {
                "label": "Iron",
                "quantity": 15.643267023041668,
                "unit": "%"
              },
              "ZN": {
                "label": "Zinc",
                "quantity": 19.987087214022726,
                "unit": "%"
              },
              "P": {
                "label": "Phosphorus",
                "quantity": 46.57512024328572,
                "unit": "%"
              },
              "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 20.464444444444446,
                "unit": "%"
              },
              "VITC": {
                "label": "Vitamin C",
                "quantity": 117.38888888888889,
                "unit": "%"
              },
              "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 32.65314402814584,
                "unit": "%"
              },
              "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 39.74730728019231,
                "unit": "%"
              },
              "NIA": {
                "label": "Niacin (B3)",
                "quantity": 51.307981054009375,
                "unit": "%"
              },
              "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 36.964177045615386,
                "unit": "%"
              },
              "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 39.92973048075,
                "unit": "%"
              },
              "VITB12": {
                "label": "Vitamin B12",
                "quantity": 11.974919785937502,
                "unit": "%"
              },
              "VITD": {
                "label": "Vitamin D",
                "quantity": 114.39743315000001,
                "unit": "%"
              },
              "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 36.492439310744444,
                "unit": "%"
              },
              "VITK1": {
                "label": "Vitamin K",
                "quantity": 72.87027777777777,
                "unit": "%"
              }
            },
            "digest": [
              {
                "label": "Fat",
                "tag": "FAT",
                "schemaOrgTag": "fatContent",
                "total": 64.5673865240375,
                "hasRDI": true,
                "daily": 99.33444080621155,
                "unit": "g",
                "sub": [
                  {
                    "label": "Saturated",
                    "tag": "FASAT",
                    "schemaOrgTag": "saturatedFatContent",
                    "total": 15.037041023168333,
                    "hasRDI": true,
                    "daily": 75.18520511584167,
                    "unit": "g"
                  },
                  {
                    "label": "Trans",
                    "tag": "FATRN",
                    "schemaOrgTag": "transFatContent",
                    "total": 0.004399845989,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Monounsaturated",
                    "tag": "FAMS",
                    "schemaOrgTag": null,
                    "total": 18.27201256327833,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Polyunsaturated",
                    "tag": "FAPU",
                    "schemaOrgTag": null,
                    "total": 28.253648828511583,
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
                "total": 42.50598432769083,
                "hasRDI": true,
                "daily": 14.16866144256361,
                "unit": "g",
                "sub": [
                  {
                    "label": "Carbs (net)",
                    "tag": "CHOCDF.net",
                    "schemaOrgTag": null,
                    "total": 37.98003438126583,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Fiber",
                    "tag": "FIBTG",
                    "schemaOrgTag": "fiberContent",
                    "total": 4.525949946425,
                    "hasRDI": true,
                    "daily": 18.1037997857,
                    "unit": "g"
                  },
                  {
                    "label": "Sugars",
                    "tag": "SUGAR",
                    "schemaOrgTag": "sugarContent",
                    "total": 9.456137076458335,
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
                "total": 15.8209187591975,
                "hasRDI": true,
                "daily": 31.641837518395,
                "unit": "g"
              },
              {
                "label": "Cholesterol",
                "tag": "CHOLE",
                "schemaOrgTag": "cholesterolContent",
                "total": 30.614,
                "hasRDI": true,
                "daily": 10.204666666666666,
                "unit": "mg"
              },
              {
                "label": "Sodium",
                "tag": "NA",
                "schemaOrgTag": "sodiumContent",
                "total": 576.8449868085834,
                "hasRDI": true,
                "daily": 24.03520778369097,
                "unit": "mg"
              },
              {
                "label": "Calcium",
                "tag": "CA",
                "schemaOrgTag": null,
                "total": 277.49988449175004,
                "hasRDI": true,
                "daily": 27.749988449175007,
                "unit": "mg"
              },
              {
                "label": "Magnesium",
                "tag": "MG",
                "schemaOrgTag": null,
                "total": 33.540000000000006,
                "hasRDI": true,
                "daily": 7.985714285714287,
                "unit": "mg"
              },
              {
                "label": "Potassium",
                "tag": "K",
                "schemaOrgTag": null,
                "total": 676.3426516656667,
                "hasRDI": true,
                "daily": 14.390269184375889,
                "unit": "mg"
              },
              {
                "label": "Iron",
                "tag": "FE",
                "schemaOrgTag": null,
                "total": 2.8157880641475,
                "hasRDI": true,
                "daily": 15.643267023041668,
                "unit": "mg"
              },
              {
                "label": "Zinc",
                "tag": "ZN",
                "schemaOrgTag": null,
                "total": 2.1985795935425,
                "hasRDI": true,
                "daily": 19.987087214022726,
                "unit": "mg"
              },
              {
                "label": "Phosphorus",
                "tag": "P",
                "schemaOrgTag": null,
                "total": 326.025841703,
                "hasRDI": true,
                "daily": 46.57512024328572,
                "unit": "mg"
              },
              {
                "label": "Vitamin A",
                "tag": "VITA_RAE",
                "schemaOrgTag": null,
                "total": 184.18,
                "hasRDI": true,
                "daily": 20.464444444444446,
                "unit": "µg"
              },
              {
                "label": "Vitamin C",
                "tag": "VITC",
                "schemaOrgTag": null,
                "total": 105.65,
                "hasRDI": true,
                "daily": 117.38888888888889,
                "unit": "mg"
              },
              {
                "label": "Thiamin (B1)",
                "tag": "THIA",
                "schemaOrgTag": null,
                "total": 0.39183772833775,
                "hasRDI": true,
                "daily": 32.65314402814584,
                "unit": "mg"
              },
              {
                "label": "Riboflavin (B2)",
                "tag": "RIBF",
                "schemaOrgTag": null,
                "total": 0.5167149946425,
                "hasRDI": true,
                "daily": 39.74730728019231,
                "unit": "mg"
              },
              {
                "label": "Niacin (B3)",
                "tag": "NIA",
                "schemaOrgTag": null,
                "total": 8.2092769686415,
                "hasRDI": true,
                "daily": 51.307981054009375,
                "unit": "mg"
              },
              {
                "label": "Vitamin B6",
                "tag": "VITB6A",
                "schemaOrgTag": null,
                "total": 0.48053430159300003,
                "hasRDI": true,
                "daily": 36.964177045615386,
                "unit": "mg"
              },
              {
                "label": "Folate equivalent (total)",
                "tag": "FOLDFE",
                "schemaOrgTag": null,
                "total": 159.718921923,
                "hasRDI": true,
                "daily": 39.92973048075,
                "unit": "µg"
              },
              {
                "label": "Folate (food)",
                "tag": "FOLFD",
                "schemaOrgTag": null,
                "total": 82.19892192300001,
                "hasRDI": false,
                "daily": 0,
                "unit": "µg"
              },
              {
                "label": "Folic acid",
                "tag": "FOLAC",
                "schemaOrgTag": null,
                "total": 45.60000000000001,
                "hasRDI": false,
                "daily": 0,
                "unit": "µg"
              },
              {
                "label": "Vitamin B12",
                "tag": "VITB12",
                "schemaOrgTag": null,
                "total": 0.2873980748625,
                "hasRDI": true,
                "daily": 11.974919785937502,
                "unit": "µg"
              },
              {
                "label": "Vitamin D",
                "tag": "VITD",
                "schemaOrgTag": null,
                "total": 17.159614972500002,
                "hasRDI": true,
                "daily": 114.39743315000001,
                "unit": "µg"
              },
              {
                "label": "Vitamin E",
                "tag": "TOCPHA",
                "schemaOrgTag": null,
                "total": 5.473865896611667,
                "hasRDI": true,
                "daily": 36.492439310744444,
                "unit": "mg"
              },
              {
                "label": "Vitamin K",
                "tag": "VITK1",
                "schemaOrgTag": null,
                "total": 87.44433333333333,
                "hasRDI": true,
                "daily": 72.87027777777777,
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
                "total": 248.120826174745,
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
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b97a01f11a0913e66d4a75c9bda2c4b0",
            "label": "Pressed Eggplant and Pepper Sandwich Recipe",
            "image": "https://www.edamam.com/web-img/f7b/f7b5e28babe082acce22f5e3dd8dc3fb.jpg",
            "source": "Chowhound",
            "url": "http://www.chowhound.com/recipes/pressed-eggplant-and-pepper-sandwich-26826",
            "shareAs": "http://www.edamam.com/recipe/pressed-eggplant-and-pepper-sandwich-recipe-b97a01f11a0913e66d4a75c9bda2c4b0/bell+pepper+sandwich+grilled/vegetarian/peanut-free",
            "yield": 6,
            "dietLabels": [
              "Balanced"
            ],
            "healthLabels": [
              "Vegetarian",
              "Peanut-Free",
              "Tree-Nut-Free",
              "Alcohol-Free"
            ],
            "cautions": [
              "Sulfites"
            ],
            "ingredientLines": [
              "1/3 cup freshly squeezed orange juice",
              "3 tablespoons olive oil, plus more for oiling the grill",
              "5 teaspoons red wine vinegar",
              "2 medium garlic cloves, thinly sliced",
              "2 teaspoons kosher salt",
              "1 1/2 teaspoons packed, finely grated orange zest",
              "1/2 teaspoon red pepper flakes",
              "3 medium bell peppers, ends trimmed, seeds and stems removed, and quartered",
              "2 medium globe eggplants, sliced crosswise into 1/4-inch-thick pieces",
              "4 ounces chèvre (goat cheese), crumbled",
              "1 loaf ciabatta, sliced in half horizontally and lightly toasted",
              "3 cups baby spinach"
            ],
            "ingredients": [
              {
                "text": "1/3 cup freshly squeezed orange juice",
                "weight": 82.66666666666666
              },
              {
                "text": "3 tablespoons olive oil, plus more for oiling the grill",
                "weight": 40.5
              },
              {
                "text": "5 teaspoons red wine vinegar",
                "weight": 25
              },
              {
                "text": "2 medium garlic cloves, thinly sliced",
                "weight": 6
              },
              {
                "text": "2 teaspoons kosher salt",
                "weight": 9.70833333382575
              },
              {
                "text": "1 1/2 teaspoons packed, finely grated orange zest",
                "weight": 3
              },
              {
                "text": "1/2 teaspoon red pepper flakes",
                "weight": 0.9
              },
              {
                "text": "3 medium bell peppers, ends trimmed, seeds and stems removed, and quartered",
                "weight": 357
              },
              {
                "text": "2 medium globe eggplants, sliced crosswise into 1/4-inch-thick pieces",
                "weight": 1096
              },
              {
                "text": "4 ounces chèvre (goat cheese), crumbled",
                "weight": 113.3980925
              },
              {
                "text": "1 loaf ciabatta, sliced in half horizontally and lightly toasted",
                "weight": 320
              },
              {
                "text": "3 cups baby spinach",
                "weight": 29.999999999999968
              }
            ],
            "calories": 1972.8229642000003,
            "totalWeight": 2080.3399653096703,
            "totalTime": 45,
            "totalNutrients": {
              "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 1972.8229642000003,
                "unit": "kcal"
              },
              "FAT": {
                "label": "Fat",
                "quantity": 79.12188123233335,
                "unit": "g"
              },
              "FASAT": {
                "label": "Saturated",
                "quantity": 25.399181981875003,
                "unit": "g"
              },
              "FAMS": {
                "label": "Monounsaturated",
                "quantity": 37.843971306475005,
                "unit": "g"
              },
              "FAPU": {
                "label": "Polyunsaturated",
                "quantity": 10.534836110091666,
                "unit": "g"
              },
              "CHOCDF": {
                "label": "Carbs",
                "quantity": 258.9690033333333,
                "unit": "g"
              },
              "FIBTG": {
                "label": "Fiber",
                "quantity": 50.53113333333333,
                "unit": "g"
              },
              "SUGAR": {
                "label": "Sugars",
                "quantity": 63.561859999999996,
                "unit": "g"
              },
              "PROCNT": {
                "label": "Protein",
                "quantity": 65.41778339766668,
                "unit": "g"
              },
              "CHOLE": {
                "label": "Cholesterol",
                "quantity": 52.163122550000004,
                "unit": "mg"
              },
              "NA": {
                "label": "Sodium",
                "quantity": 4824.126308146901,
                "unit": "mg"
              },
              "CA": {
                "label": "Calcium",
                "quantity": 591.1177123076542,
                "unit": "mg"
              },
              "MG": {
                "label": "Magnesium",
                "quantity": 338.2037801947634,
                "unit": "mg"
              },
              "K": {
                "label": "Potassium",
                "quantity": 4036.4978538747737,
                "unit": "mg"
              },
              "FE": {
                "label": "Iron",
                "quantity": 17.151685271105244,
                "unit": "mg"
              },
              "ZN": {
                "label": "Zinc",
                "quantity": 6.754490990476337,
                "unit": "mg"
              },
              "P": {
                "label": "Phosphorus",
                "quantity": 1018.9594501333333,
                "unit": "mg"
              },
              "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 1066.3621730666666,
                "unit": "µg"
              },
              "VITC": {
                "label": "Vitamin C",
                "quantity": 536.5289333333334,
                "unit": "mg"
              },
              "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 2.32955066475,
                "unit": "mg"
              },
              "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 2.1733537515,
                "unit": "mg"
              },
              "NIA": {
                "label": "Niacin (B3)",
                "quantity": 25.810057464416666,
                "unit": "mg"
              },
              "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 2.589601897916667,
                "unit": "mg"
              },
              "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 1476.7817711,
                "unit": "µg"
              },
              "FOLFD": {
                "label": "Folate (food)",
                "quantity": 599.9817711,
                "unit": "µg"
              },
              "FOLAC": {
                "label": "Folic acid",
                "quantity": 515.2,
                "unit": "µg"
              },
              "VITB12": {
                "label": "Vitamin B12",
                "quantity": 0.21545637575000004,
                "unit": "µg"
              },
              "VITD": {
                "label": "Vitamin D",
                "quantity": 17.009713875000003,
                "unit": "IU"
              },
              "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 16.795303233166667,
                "unit": "mg"
              },
              "VITK1": {
                "label": "Vitamin K",
                "quantity": 231.89253233166653,
                "unit": "µg"
              },
              "WATER": {
                "label": "Water",
                "quantity": 1653.7332082727028,
                "unit": "g"
              }
            },
            "totalDaily": {
              "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 98.64114821000001,
                "unit": "%"
              },
              "FAT": {
                "label": "Fat",
                "quantity": 121.72597112666669,
                "unit": "%"
              },
              "FASAT": {
                "label": "Saturated",
                "quantity": 126.99590990937502,
                "unit": "%"
              },
              "CHOCDF": {
                "label": "Carbs",
                "quantity": 86.32300111111111,
                "unit": "%"
              },
              "FIBTG": {
                "label": "Fiber",
                "quantity": 202.12453333333332,
                "unit": "%"
              },
              "PROCNT": {
                "label": "Protein",
                "quantity": 130.83556679533336,
                "unit": "%"
              },
              "CHOLE": {
                "label": "Cholesterol",
                "quantity": 17.38770751666667,
                "unit": "%"
              },
              "NA": {
                "label": "Sodium",
                "quantity": 201.0052628394542,
                "unit": "%"
              },
              "CA": {
                "label": "Calcium",
                "quantity": 59.11177123076542,
                "unit": "%"
              },
              "MG": {
                "label": "Magnesium",
                "quantity": 80.52470957018176,
                "unit": "%"
              },
              "K": {
                "label": "Potassium",
                "quantity": 85.8829330611654,
                "unit": "%"
              },
              "FE": {
                "label": "Iron",
                "quantity": 95.28714039502913,
                "unit": "%"
              },
              "ZN": {
                "label": "Zinc",
                "quantity": 61.40446354978488,
                "unit": "%"
              },
              "P": {
                "label": "Phosphorus",
                "quantity": 145.56563573333332,
                "unit": "%"
              },
              "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 118.48468589629628,
                "unit": "%"
              },
              "VITC": {
                "label": "Vitamin C",
                "quantity": 596.1432592592594,
                "unit": "%"
              },
              "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 194.12922206250002,
                "unit": "%"
              },
              "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 167.1810578076923,
                "unit": "%"
              },
              "NIA": {
                "label": "Niacin (B3)",
                "quantity": 161.31285915260415,
                "unit": "%"
              },
              "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 199.20014599358973,
                "unit": "%"
              },
              "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 369.19544277499995,
                "unit": "%"
              },
              "VITB12": {
                "label": "Vitamin B12",
                "quantity": 8.977348989583335,
                "unit": "%"
              },
              "VITD": {
                "label": "Vitamin D",
                "quantity": 113.39809250000002,
                "unit": "%"
              },
              "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 111.96868822111111,
                "unit": "%"
              },
              "VITK1": {
                "label": "Vitamin K",
                "quantity": 193.24377694305542,
                "unit": "%"
              }
            },
            "digest": [
              {
                "label": "Fat",
                "tag": "FAT",
                "schemaOrgTag": "fatContent",
                "total": 79.12188123233335,
                "hasRDI": true,
                "daily": 121.72597112666669,
                "unit": "g",
                "sub": [
                  {
                    "label": "Saturated",
                    "tag": "FASAT",
                    "schemaOrgTag": "saturatedFatContent",
                    "total": 25.399181981875003,
                    "hasRDI": true,
                    "daily": 126.99590990937502,
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
                    "total": 37.843971306475005,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Polyunsaturated",
                    "tag": "FAPU",
                    "schemaOrgTag": null,
                    "total": 10.534836110091666,
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
                "total": 258.9690033333333,
                "hasRDI": true,
                "daily": 86.32300111111111,
                "unit": "g",
                "sub": [
                  {
                    "label": "Carbs (net)",
                    "tag": "CHOCDF.net",
                    "schemaOrgTag": null,
                    "total": 208.43786999999998,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Fiber",
                    "tag": "FIBTG",
                    "schemaOrgTag": "fiberContent",
                    "total": 50.53113333333333,
                    "hasRDI": true,
                    "daily": 202.12453333333332,
                    "unit": "g"
                  },
                  {
                    "label": "Sugars",
                    "tag": "SUGAR",
                    "schemaOrgTag": "sugarContent",
                    "total": 63.561859999999996,
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
                "total": 65.41778339766668,
                "hasRDI": true,
                "daily": 130.83556679533336,
                "unit": "g"
              },
              {
                "label": "Cholesterol",
                "tag": "CHOLE",
                "schemaOrgTag": "cholesterolContent",
                "total": 52.163122550000004,
                "hasRDI": true,
                "daily": 17.38770751666667,
                "unit": "mg"
              },
              {
                "label": "Sodium",
                "tag": "NA",
                "schemaOrgTag": "sodiumContent",
                "total": 4824.126308146901,
                "hasRDI": true,
                "daily": 201.0052628394542,
                "unit": "mg"
              },
              {
                "label": "Calcium",
                "tag": "CA",
                "schemaOrgTag": null,
                "total": 591.1177123076542,
                "hasRDI": true,
                "daily": 59.11177123076542,
                "unit": "mg"
              },
              {
                "label": "Magnesium",
                "tag": "MG",
                "schemaOrgTag": null,
                "total": 338.2037801947634,
                "hasRDI": true,
                "daily": 80.52470957018176,
                "unit": "mg"
              },
              {
                "label": "Potassium",
                "tag": "K",
                "schemaOrgTag": null,
                "total": 4036.4978538747737,
                "hasRDI": true,
                "daily": 85.8829330611654,
                "unit": "mg"
              },
              {
                "label": "Iron",
                "tag": "FE",
                "schemaOrgTag": null,
                "total": 17.151685271105244,
                "hasRDI": true,
                "daily": 95.28714039502913,
                "unit": "mg"
              },
              {
                "label": "Zinc",
                "tag": "ZN",
                "schemaOrgTag": null,
                "total": 6.754490990476337,
                "hasRDI": true,
                "daily": 61.40446354978488,
                "unit": "mg"
              },
              {
                "label": "Phosphorus",
                "tag": "P",
                "schemaOrgTag": null,
                "total": 1018.9594501333333,
                "hasRDI": true,
                "daily": 145.56563573333332,
                "unit": "mg"
              },
              {
                "label": "Vitamin A",
                "tag": "VITA_RAE",
                "schemaOrgTag": null,
                "total": 1066.3621730666666,
                "hasRDI": true,
                "daily": 118.48468589629628,
                "unit": "µg"
              },
              {
                "label": "Vitamin C",
                "tag": "VITC",
                "schemaOrgTag": null,
                "total": 536.5289333333334,
                "hasRDI": true,
                "daily": 596.1432592592594,
                "unit": "mg"
              },
              {
                "label": "Thiamin (B1)",
                "tag": "THIA",
                "schemaOrgTag": null,
                "total": 2.32955066475,
                "hasRDI": true,
                "daily": 194.12922206250002,
                "unit": "mg"
              },
              {
                "label": "Riboflavin (B2)",
                "tag": "RIBF",
                "schemaOrgTag": null,
                "total": 2.1733537515,
                "hasRDI": true,
                "daily": 167.1810578076923,
                "unit": "mg"
              },
              {
                "label": "Niacin (B3)",
                "tag": "NIA",
                "schemaOrgTag": null,
                "total": 25.810057464416666,
                "hasRDI": true,
                "daily": 161.31285915260415,
                "unit": "mg"
              },
              {
                "label": "Vitamin B6",
                "tag": "VITB6A",
                "schemaOrgTag": null,
                "total": 2.589601897916667,
                "hasRDI": true,
                "daily": 199.20014599358973,
                "unit": "mg"
              },
              {
                "label": "Folate equivalent (total)",
                "tag": "FOLDFE",
                "schemaOrgTag": null,
                "total": 1476.7817711,
                "hasRDI": true,
                "daily": 369.19544277499995,
                "unit": "µg"
              },
              {
                "label": "Folate (food)",
                "tag": "FOLFD",
                "schemaOrgTag": null,
                "total": 599.9817711,
                "hasRDI": false,
                "daily": 0,
                "unit": "µg"
              },
              {
                "label": "Folic acid",
                "tag": "FOLAC",
                "schemaOrgTag": null,
                "total": 515.2,
                "hasRDI": false,
                "daily": 0,
                "unit": "µg"
              },
              {
                "label": "Vitamin B12",
                "tag": "VITB12",
                "schemaOrgTag": null,
                "total": 0.21545637575000004,
                "hasRDI": true,
                "daily": 8.977348989583335,
                "unit": "µg"
              },
              {
                "label": "Vitamin D",
                "tag": "VITD",
                "schemaOrgTag": null,
                "total": 17.009713875000003,
                "hasRDI": true,
                "daily": 113.39809250000002,
                "unit": "µg"
              },
              {
                "label": "Vitamin E",
                "tag": "TOCPHA",
                "schemaOrgTag": null,
                "total": 16.795303233166667,
                "hasRDI": true,
                "daily": 111.96868822111111,
                "unit": "mg"
              },
              {
                "label": "Vitamin K",
                "tag": "VITK1",
                "schemaOrgTag": null,
                "total": 231.89253233166653,
                "hasRDI": true,
                "daily": 193.24377694305542,
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
                "total": 1653.7332082727028,
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
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_e3853cfbc9bac3910632c0b1878f71ac",
            "label": "Grilled Portobello, Bell Pepper, And Goat Cheese Sandwiches",
            "image": "https://www.edamam.com/web-img/815/8155ff71033d9ff0c184740b20fd1524.jpg",
            "source": "My Recipes",
            "url": "http://www.myrecipes.com/recipe/grilled-portobello-bell-pepper-goat-cheese-sandwiches-10000001734337/",
            "shareAs": "http://www.edamam.com/recipe/grilled-portobello-bell-pepper-and-goat-cheese-sandwiches-e3853cfbc9bac3910632c0b1878f71ac/bell+pepper+sandwich+grilled/vegetarian/peanut-free",
            "yield": 6,
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
              "Sulfites"
            ],
            "ingredientLines": [
              "1/4 cup balsamic vinegar",
              "1 tablespoon olive oil",
              "1 garlic clove, minced",
              "1 red bell pepper, cut in half and seeded",
              "1 yellow bell pepper, cut in half and seeded",
              "4 (4-inch) portobello mushroom caps",
              "Cooking spray",
              "1/3 cup chopped fresh basil",
              "1/4 teaspoon salt",
              "1/4 teaspoon freshly ground black pepper",
              "4 (2-ounce) Kaiser rolls",
              "1/2 cup (4 ounces) soft goat cheese"
            ],
            "ingredients": [
              {
                "text": "1/4 cup balsamic vinegar",
                "weight": 63.75
              },
              {
                "text": "1 tablespoon olive oil",
                "weight": 13.5
              },
              {
                "text": "1 garlic clove, minced",
                "weight": 3
              },
              {
                "text": "1 red bell pepper, cut in half and seeded",
                "weight": 119
              },
              {
                "text": "1 yellow bell pepper, cut in half and seeded",
                "weight": 186
              },
              {
                "text": "4 (4-inch) portobello mushroom caps",
                "weight": 54
              },
              {
                "text": "Cooking spray",
                "weight": 10.737462174
              },
              {
                "text": "1/3 cup chopped fresh basil",
                "weight": 8
              },
              {
                "text": "1/4 teaspoon salt",
                "weight": 1.5
              },
              {
                "text": "1/4 teaspoon freshly ground black pepper",
                "weight": 0.575
              },
              {
                "text": "4 (2-ounce) Kaiser rolls",
                "weight": 226.796185
              },
              {
                "text": "1/2 cup (4 ounces) soft goat cheese",
                "weight": 113.3980925
              }
            ],
            "calories": 1331.1077366680802,
            "totalWeight": 798.9369133912181,
            "totalTime": 0,
            "totalNutrients": {
              "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 1331.1077366680802,
                "unit": "kcal"
              },
              "FAT": {
                "label": "Fat",
                "quantity": 56.622007838720606,
                "unit": "g"
              },
              "FASAT": {
                "label": "Saturated",
                "quantity": 20.4365383372185,
                "unit": "g"
              },
              "FAMS": {
                "label": "Monounsaturated",
                "quantity": 23.23196849820308,
                "unit": "g"
              },
              "FAPU": {
                "label": "Polyunsaturated",
                "quantity": 8.479195362007301,
                "unit": "g"
              },
              "CHOCDF": {
                "label": "Carbs",
                "quantity": 154.86260791880062,
                "unit": "g"
              },
              "FIBTG": {
                "label": "Fiber",
                "quantity": 10.265787255000001,
                "unit": "g"
              },
              "SUGAR": {
                "label": "Sugars",
                "quantity": 19.669797474499997,
                "unit": "g"
              },
              "PROCNT": {
                "label": "Protein",
                "quantity": 49.003683947652405,
                "unit": "g"
              },
              "CHOLE": {
                "label": "Cholesterol",
                "quantity": 52.163122550000004,
                "unit": "mg"
              },
              "NA": {
                "label": "Sodium",
                "quantity": 1857.492822977093,
                "unit": "mg"
              },
              "CA": {
                "label": "Calcium",
                "quantity": 444.15169694213245,
                "unit": "mg"
              },
              "MG": {
                "label": "Magnesium",
                "quantity": 135.34371648717217,
                "unit": "mg"
              },
              "K": {
                "label": "Potassium",
                "quantity": 1206.3745477473774,
                "unit": "mg"
              },
              "FE": {
                "label": "Iron",
                "quantity": 12.12640569876682,
                "unit": "mg"
              },
              "ZN": {
                "label": "Zinc",
                "quantity": 4.227269263717219,
                "unit": "mg"
              },
              "P": {
                "label": "Phosphorus",
                "quantity": 661.2063018000001,
                "unit": "mg"
              },
              "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 553.2917563999999,
                "unit": "µg"
              },
              "VITC": {
                "label": "Vitamin C",
                "quantity": 496.783,
                "unit": "mg"
              },
              "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 1.3328854290500003,
                "unit": "mg"
              },
              "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 1.5680929331000004,
                "unit": "mg"
              },
              "NIA": {
                "label": "Niacin (B3)",
                "quantity": 14.9694243299,
                "unit": "mg"
              },
              "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 1.128927146,
                "unit": "mg"
              },
              "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 473.97776045000006,
                "unit": "µg"
              },
              "FOLFD": {
                "label": "Folate (food)",
                "quantity": 165.53494885,
                "unit": "µg"
              },
              "FOLAC": {
                "label": "Folic acid",
                "quantity": 181.43694800000003,
                "unit": "µg"
              },
              "VITB12": {
                "label": "Vitamin B12",
                "quantity": 0.23705637575000005,
                "unit": "µg"
              },
              "VITD": {
                "label": "Vitamin D",
                "quantity": 20.789713875000004,
                "unit": "IU"
              },
              "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 5.0518905435,
                "unit": "mg"
              },
              "VITK1": {
                "label": "Vitamin K",
                "quantity": 51.536217775000004,
                "unit": "µg"
              },
              "WATER": {
                "label": "Water",
                "quantity": 527.9491500995758,
                "unit": "g"
              }
            },
            "totalDaily": {
              "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 66.55538683340401,
                "unit": "%"
              },
              "FAT": {
                "label": "Fat",
                "quantity": 87.11078129033939,
                "unit": "%"
              },
              "FASAT": {
                "label": "Saturated",
                "quantity": 102.18269168609251,
                "unit": "%"
              },
              "CHOCDF": {
                "label": "Carbs",
                "quantity": 51.620869306266876,
                "unit": "%"
              },
              "FIBTG": {
                "label": "Fiber",
                "quantity": 41.06314902,
                "unit": "%"
              },
              "PROCNT": {
                "label": "Protein",
                "quantity": 98.00736789530481,
                "unit": "%"
              },
              "CHOLE": {
                "label": "Cholesterol",
                "quantity": 17.38770751666667,
                "unit": "%"
              },
              "NA": {
                "label": "Sodium",
                "quantity": 77.39553429071222,
                "unit": "%"
              },
              "CA": {
                "label": "Calcium",
                "quantity": 44.41516969421325,
                "unit": "%"
              },
              "MG": {
                "label": "Magnesium",
                "quantity": 32.22469440170766,
                "unit": "%"
              },
              "K": {
                "label": "Potassium",
                "quantity": 25.667543569093134,
                "unit": "%"
              },
              "FE": {
                "label": "Iron",
                "quantity": 67.36892054870457,
                "unit": "%"
              },
              "ZN": {
                "label": "Zinc",
                "quantity": 38.42972057924745,
                "unit": "%"
              },
              "P": {
                "label": "Phosphorus",
                "quantity": 94.45804311428573,
                "unit": "%"
              },
              "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 61.47686182222222,
                "unit": "%"
              },
              "VITC": {
                "label": "Vitamin C",
                "quantity": 551.9811111111111,
                "unit": "%"
              },
              "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 111.0737857541667,
                "unit": "%"
              },
              "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 120.62253331538464,
                "unit": "%"
              },
              "NIA": {
                "label": "Niacin (B3)",
                "quantity": 93.558902061875,
                "unit": "%"
              },
              "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 86.84054969230769,
                "unit": "%"
              },
              "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 118.49444011250002,
                "unit": "%"
              },
              "VITB12": {
                "label": "Vitamin B12",
                "quantity": 9.877348989583336,
                "unit": "%"
              },
              "VITD": {
                "label": "Vitamin D",
                "quantity": 138.5980925,
                "unit": "%"
              },
              "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 33.67927029,
                "unit": "%"
              },
              "VITK1": {
                "label": "Vitamin K",
                "quantity": 42.946848145833336,
                "unit": "%"
              }
            },
            "digest": [
              {
                "label": "Fat",
                "tag": "FAT",
                "schemaOrgTag": "fatContent",
                "total": 56.622007838720606,
                "hasRDI": true,
                "daily": 87.11078129033939,
                "unit": "g",
                "sub": [
                  {
                    "label": "Saturated",
                    "tag": "FASAT",
                    "schemaOrgTag": "saturatedFatContent",
                    "total": 20.4365383372185,
                    "hasRDI": true,
                    "daily": 102.18269168609251,
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
                    "total": 23.23196849820308,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Polyunsaturated",
                    "tag": "FAPU",
                    "schemaOrgTag": null,
                    "total": 8.479195362007301,
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
                "total": 154.86260791880062,
                "hasRDI": true,
                "daily": 51.620869306266876,
                "unit": "g",
                "sub": [
                  {
                    "label": "Carbs (net)",
                    "tag": "CHOCDF.net",
                    "schemaOrgTag": null,
                    "total": 144.59682066380063,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Fiber",
                    "tag": "FIBTG",
                    "schemaOrgTag": "fiberContent",
                    "total": 10.265787255000001,
                    "hasRDI": true,
                    "daily": 41.06314902,
                    "unit": "g"
                  },
                  {
                    "label": "Sugars",
                    "tag": "SUGAR",
                    "schemaOrgTag": "sugarContent",
                    "total": 19.669797474499997,
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
                "total": 49.003683947652405,
                "hasRDI": true,
                "daily": 98.00736789530481,
                "unit": "g"
              },
              {
                "label": "Cholesterol",
                "tag": "CHOLE",
                "schemaOrgTag": "cholesterolContent",
                "total": 52.163122550000004,
                "hasRDI": true,
                "daily": 17.38770751666667,
                "unit": "mg"
              },
              {
                "label": "Sodium",
                "tag": "NA",
                "schemaOrgTag": "sodiumContent",
                "total": 1857.492822977093,
                "hasRDI": true,
                "daily": 77.39553429071222,
                "unit": "mg"
              },
              {
                "label": "Calcium",
                "tag": "CA",
                "schemaOrgTag": null,
                "total": 444.15169694213245,
                "hasRDI": true,
                "daily": 44.41516969421325,
                "unit": "mg"
              },
              {
                "label": "Magnesium",
                "tag": "MG",
                "schemaOrgTag": null,
                "total": 135.34371648717217,
                "hasRDI": true,
                "daily": 32.22469440170766,
                "unit": "mg"
              },
              {
                "label": "Potassium",
                "tag": "K",
                "schemaOrgTag": null,
                "total": 1206.3745477473774,
                "hasRDI": true,
                "daily": 25.667543569093134,
                "unit": "mg"
              },
              {
                "label": "Iron",
                "tag": "FE",
                "schemaOrgTag": null,
                "total": 12.12640569876682,
                "hasRDI": true,
                "daily": 67.36892054870457,
                "unit": "mg"
              },
              {
                "label": "Zinc",
                "tag": "ZN",
                "schemaOrgTag": null,
                "total": 4.227269263717219,
                "hasRDI": true,
                "daily": 38.42972057924745,
                "unit": "mg"
              },
              {
                "label": "Phosphorus",
                "tag": "P",
                "schemaOrgTag": null,
                "total": 661.2063018000001,
                "hasRDI": true,
                "daily": 94.45804311428573,
                "unit": "mg"
              },
              {
                "label": "Vitamin A",
                "tag": "VITA_RAE",
                "schemaOrgTag": null,
                "total": 553.2917563999999,
                "hasRDI": true,
                "daily": 61.47686182222222,
                "unit": "µg"
              },
              {
                "label": "Vitamin C",
                "tag": "VITC",
                "schemaOrgTag": null,
                "total": 496.783,
                "hasRDI": true,
                "daily": 551.9811111111111,
                "unit": "mg"
              },
              {
                "label": "Thiamin (B1)",
                "tag": "THIA",
                "schemaOrgTag": null,
                "total": 1.3328854290500003,
                "hasRDI": true,
                "daily": 111.0737857541667,
                "unit": "mg"
              },
              {
                "label": "Riboflavin (B2)",
                "tag": "RIBF",
                "schemaOrgTag": null,
                "total": 1.5680929331000004,
                "hasRDI": true,
                "daily": 120.62253331538464,
                "unit": "mg"
              },
              {
                "label": "Niacin (B3)",
                "tag": "NIA",
                "schemaOrgTag": null,
                "total": 14.9694243299,
                "hasRDI": true,
                "daily": 93.558902061875,
                "unit": "mg"
              },
              {
                "label": "Vitamin B6",
                "tag": "VITB6A",
                "schemaOrgTag": null,
                "total": 1.128927146,
                "hasRDI": true,
                "daily": 86.84054969230769,
                "unit": "mg"
              },
              {
                "label": "Folate equivalent (total)",
                "tag": "FOLDFE",
                "schemaOrgTag": null,
                "total": 473.97776045000006,
                "hasRDI": true,
                "daily": 118.49444011250002,
                "unit": "µg"
              },
              {
                "label": "Folate (food)",
                "tag": "FOLFD",
                "schemaOrgTag": null,
                "total": 165.53494885,
                "hasRDI": false,
                "daily": 0,
                "unit": "µg"
              },
              {
                "label": "Folic acid",
                "tag": "FOLAC",
                "schemaOrgTag": null,
                "total": 181.43694800000003,
                "hasRDI": false,
                "daily": 0,
                "unit": "µg"
              },
              {
                "label": "Vitamin B12",
                "tag": "VITB12",
                "schemaOrgTag": null,
                "total": 0.23705637575000005,
                "hasRDI": true,
                "daily": 9.877348989583336,
                "unit": "µg"
              },
              {
                "label": "Vitamin D",
                "tag": "VITD",
                "schemaOrgTag": null,
                "total": 20.789713875000004,
                "hasRDI": true,
                "daily": 138.5980925,
                "unit": "µg"
              },
              {
                "label": "Vitamin E",
                "tag": "TOCPHA",
                "schemaOrgTag": null,
                "total": 5.0518905435,
                "hasRDI": true,
                "daily": 33.67927029,
                "unit": "mg"
              },
              {
                "label": "Vitamin K",
                "tag": "VITK1",
                "schemaOrgTag": null,
                "total": 51.536217775000004,
                "hasRDI": true,
                "daily": 42.946848145833336,
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
                "total": 527.9491500995758,
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
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_29b226e18709a35c0eb024a507b60dab",
            "label": "Grilled-Vegetable Sandwich",
            "image": "https://www.edamam.com/web-img/6fd/6fd0882c3d63e4e93320223c86066db9.jpg",
            "source": "Food & Wine",
            "url": "http://www.foodandwine.com/recipes/grilled-vegetable-sandwich",
            "shareAs": "http://www.edamam.com/recipe/grilled-vegetable-sandwich-29b226e18709a35c0eb024a507b60dab/bell+pepper+sandwich+grilled/vegetarian/peanut-free",
            "yield": 4,
            "dietLabels": [],
            "healthLabels": [
              "Vegetarian",
              "Peanut-Free"
            ],
            "cautions": [
              "FODMAP"
            ],
            "ingredientLines": [
              "1 teaspoon dried oregano",
              "2 tablespoons chopped fresh basil (optional)",
              "1/2 teaspoon salt",
              "1/2 teaspoon fresh-ground black pepper",
              "1 1/2 teaspoons wine vinegar",
              "3/4 cup olive oil",
              "1 eggplant, cut into 1/2-inch slices",
              "1 zucchini, cut into 1/2-inch slices",
              "2 red bell peppers, cut into wedges",
              "1 red onion, cut into 1/2-inch slices",
              "4 large crusty rolls, split",
              "4 tablespoons store-bought or homemade pesto",
              "4 leaves romaine lettuce",
              "2 tomatoes, sliced"
            ],
            "ingredients": [
              {
                "text": "1 teaspoon dried oregano",
                "weight": 1
              },
              {
                "text": "1/2 teaspoon salt",
                "weight": 3
              },
              {
                "text": "1/2 teaspoon fresh-ground black pepper",
                "weight": 1.45
              },
              {
                "text": "1 1/2 teaspoons wine vinegar",
                "weight": 7.5
              },
              {
                "text": "3/4 cup olive oil",
                "weight": 162
              },
              {
                "text": "1 eggplant, cut into 1/2-inch slices",
                "weight": 548
              },
              {
                "text": "1 zucchini, cut into 1/2-inch slices",
                "weight": 196
              },
              {
                "text": "2 red bell peppers, cut into wedges",
                "weight": 238
              },
              {
                "text": "1 red onion, cut into 1/2-inch slices",
                "weight": 125
              },
              {
                "text": "4 large crusty rolls, split",
                "weight": 285
              },
              {
                "text": "4 tablespoons store-bought or homemade pesto",
                "weight": 68
              },
              {
                "text": "4 leaves romaine lettuce",
                "weight": 24
              },
              {
                "text": "2 tomatoes, sliced",
                "weight": 246
              }
            ],
            "calories": 2843.3868033707868,
            "totalWeight": 1904.95,
            "totalTime": 63,
            "totalNutrients": {
              "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 2843.3868033707868,
                "unit": "kcal"
              },
              "FAT": {
                "label": "Fat",
                "quantity": 198.75492842696627,
                "unit": "g"
              },
              "FASAT": {
                "label": "Saturated",
                "quantity": 27.54288253932584,
                "unit": "g"
              },
              "FAMS": {
                "label": "Monounsaturated",
                "quantity": 121.65551550000002,
                "unit": "g"
              },
              "FAPU": {
                "label": "Polyunsaturated",
                "quantity": 22.999841,
                "unit": "g"
              },
              "CHOCDF": {
                "label": "Carbs",
                "quantity": 231.8661896067416,
                "unit": "g"
              },
              "FIBTG": {
                "label": "Fiber",
                "quantity": 37.47191741573033,
                "unit": "g"
              },
              "SUGAR": {
                "label": "Sugars",
                "quantity": 51.393480000000004,
                "unit": "g"
              },
              "PROCNT": {
                "label": "Protein",
                "quantity": 45.788855000000005,
                "unit": "g"
              },
              "CHOLE": {
                "label": "Cholesterol",
                "quantity": 5.348314606741573,
                "unit": "mg"
              },
              "NA": {
                "label": "Sodium",
                "quantity": 3452.4500000000007,
                "unit": "mg"
              },
              "CA": {
                "label": "Calcium",
                "quantity": 568.0041741573034,
                "unit": "mg"
              },
              "MG": {
                "label": "Magnesium",
                "quantity": 265.7145,
                "unit": "mg"
              },
              "K": {
                "label": "Potassium",
                "quantity": 3435.1405000000004,
                "unit": "mg"
              },
              "FE": {
                "label": "Iron",
                "quantity": 16.663746123595505,
                "unit": "mg"
              },
              "ZN": {
                "label": "Zinc",
                "quantity": 5.511805,
                "unit": "mg"
              },
              "P": {
                "label": "Phosphorus",
                "quantity": 659.441,
                "unit": "mg"
              },
              "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 607.9414999999999,
                "unit": "µg"
              },
              "VITC": {
                "label": "Vitamin C",
                "quantity": 395.001,
                "unit": "mg"
              },
              "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 1.9618760000000002,
                "unit": "mg"
              },
              "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 1.6513600000000002,
                "unit": "mg"
              },
              "NIA": {
                "label": "Niacin (B3)",
                "quantity": 20.5959835,
                "unit": "mg"
              },
              "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 1.9513495,
                "unit": "mg"
              },
              "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 803.3365,
                "unit": "µg"
              },
              "FOLFD": {
                "label": "Folate (food)",
                "quantity": 415.7365,
                "unit": "µg"
              },
              "FOLAC": {
                "label": "Folic acid",
                "quantity": 228,
                "unit": "µg"
              },
              "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 31.66587999999999,
                "unit": "mg"
              },
              "VITK1": {
                "label": "Vitamin K",
                "quantity": 191.62865000000002,
                "unit": "µg"
              },
              "WATER": {
                "label": "Water",
                "quantity": 1373.40977,
                "unit": "g"
              }
            },
            "totalDaily": {
              "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 142.16934016853935,
                "unit": "%"
              },
              "FAT": {
                "label": "Fat",
                "quantity": 305.77681296456353,
                "unit": "%"
              },
              "FASAT": {
                "label": "Saturated",
                "quantity": 137.7144126966292,
                "unit": "%"
              },
              "CHOCDF": {
                "label": "Carbs",
                "quantity": 77.28872986891388,
                "unit": "%"
              },
              "FIBTG": {
                "label": "Fiber",
                "quantity": 149.88766966292133,
                "unit": "%"
              },
              "PROCNT": {
                "label": "Protein",
                "quantity": 91.57771000000001,
                "unit": "%"
              },
              "CHOLE": {
                "label": "Cholesterol",
                "quantity": 1.7827715355805243,
                "unit": "%"
              },
              "NA": {
                "label": "Sodium",
                "quantity": 143.85208333333335,
                "unit": "%"
              },
              "CA": {
                "label": "Calcium",
                "quantity": 56.800417415730344,
                "unit": "%"
              },
              "MG": {
                "label": "Magnesium",
                "quantity": 63.265357142857134,
                "unit": "%"
              },
              "K": {
                "label": "Potassium",
                "quantity": 73.08809574468086,
                "unit": "%"
              },
              "FE": {
                "label": "Iron",
                "quantity": 92.57636735330837,
                "unit": "%"
              },
              "ZN": {
                "label": "Zinc",
                "quantity": 50.10731818181818,
                "unit": "%"
              },
              "P": {
                "label": "Phosphorus",
                "quantity": 94.20585714285716,
                "unit": "%"
              },
              "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 67.54905555555555,
                "unit": "%"
              },
              "VITC": {
                "label": "Vitamin C",
                "quantity": 438.89,
                "unit": "%"
              },
              "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 163.4896666666667,
                "unit": "%"
              },
              "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 127.02769230769232,
                "unit": "%"
              },
              "NIA": {
                "label": "Niacin (B3)",
                "quantity": 128.72489687499998,
                "unit": "%"
              },
              "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 150.1038076923077,
                "unit": "%"
              },
              "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 200.83412499999997,
                "unit": "%"
              },
              "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 211.10586666666663,
                "unit": "%"
              },
              "VITK1": {
                "label": "Vitamin K",
                "quantity": 159.6905416666667,
                "unit": "%"
              }
            },
            "digest": [
              {
                "label": "Fat",
                "tag": "FAT",
                "schemaOrgTag": "fatContent",
                "total": 198.75492842696627,
                "hasRDI": true,
                "daily": 305.77681296456353,
                "unit": "g",
                "sub": [
                  {
                    "label": "Saturated",
                    "tag": "FASAT",
                    "schemaOrgTag": "saturatedFatContent",
                    "total": 27.54288253932584,
                    "hasRDI": true,
                    "daily": 137.7144126966292,
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
                    "total": 121.65551550000002,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Polyunsaturated",
                    "tag": "FAPU",
                    "schemaOrgTag": null,
                    "total": 22.999841,
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
                "total": 231.8661896067416,
                "hasRDI": true,
                "daily": 77.28872986891388,
                "unit": "g",
                "sub": [
                  {
                    "label": "Carbs (net)",
                    "tag": "CHOCDF.net",
                    "schemaOrgTag": null,
                    "total": 194.39427219101128,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Fiber",
                    "tag": "FIBTG",
                    "schemaOrgTag": "fiberContent",
                    "total": 37.47191741573033,
                    "hasRDI": true,
                    "daily": 149.88766966292133,
                    "unit": "g"
                  },
                  {
                    "label": "Sugars",
                    "tag": "SUGAR",
                    "schemaOrgTag": "sugarContent",
                    "total": 51.393480000000004,
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
                "total": 45.788855000000005,
                "hasRDI": true,
                "daily": 91.57771000000001,
                "unit": "g"
              },
              {
                "label": "Cholesterol",
                "tag": "CHOLE",
                "schemaOrgTag": "cholesterolContent",
                "total": 5.348314606741573,
                "hasRDI": true,
                "daily": 1.7827715355805243,
                "unit": "mg"
              },
              {
                "label": "Sodium",
                "tag": "NA",
                "schemaOrgTag": "sodiumContent",
                "total": 3452.4500000000007,
                "hasRDI": true,
                "daily": 143.85208333333335,
                "unit": "mg"
              },
              {
                "label": "Calcium",
                "tag": "CA",
                "schemaOrgTag": null,
                "total": 568.0041741573034,
                "hasRDI": true,
                "daily": 56.800417415730344,
                "unit": "mg"
              },
              {
                "label": "Magnesium",
                "tag": "MG",
                "schemaOrgTag": null,
                "total": 265.7145,
                "hasRDI": true,
                "daily": 63.265357142857134,
                "unit": "mg"
              },
              {
                "label": "Potassium",
                "tag": "K",
                "schemaOrgTag": null,
                "total": 3435.1405000000004,
                "hasRDI": true,
                "daily": 73.08809574468086,
                "unit": "mg"
              },
              {
                "label": "Iron",
                "tag": "FE",
                "schemaOrgTag": null,
                "total": 16.663746123595505,
                "hasRDI": true,
                "daily": 92.57636735330837,
                "unit": "mg"
              },
              {
                "label": "Zinc",
                "tag": "ZN",
                "schemaOrgTag": null,
                "total": 5.511805,
                "hasRDI": true,
                "daily": 50.10731818181818,
                "unit": "mg"
              },
              {
                "label": "Phosphorus",
                "tag": "P",
                "schemaOrgTag": null,
                "total": 659.441,
                "hasRDI": true,
                "daily": 94.20585714285716,
                "unit": "mg"
              },
              {
                "label": "Vitamin A",
                "tag": "VITA_RAE",
                "schemaOrgTag": null,
                "total": 607.9414999999999,
                "hasRDI": true,
                "daily": 67.54905555555555,
                "unit": "µg"
              },
              {
                "label": "Vitamin C",
                "tag": "VITC",
                "schemaOrgTag": null,
                "total": 395.001,
                "hasRDI": true,
                "daily": 438.89,
                "unit": "mg"
              },
              {
                "label": "Thiamin (B1)",
                "tag": "THIA",
                "schemaOrgTag": null,
                "total": 1.9618760000000002,
                "hasRDI": true,
                "daily": 163.4896666666667,
                "unit": "mg"
              },
              {
                "label": "Riboflavin (B2)",
                "tag": "RIBF",
                "schemaOrgTag": null,
                "total": 1.6513600000000002,
                "hasRDI": true,
                "daily": 127.02769230769232,
                "unit": "mg"
              },
              {
                "label": "Niacin (B3)",
                "tag": "NIA",
                "schemaOrgTag": null,
                "total": 20.5959835,
                "hasRDI": true,
                "daily": 128.72489687499998,
                "unit": "mg"
              },
              {
                "label": "Vitamin B6",
                "tag": "VITB6A",
                "schemaOrgTag": null,
                "total": 1.9513495,
                "hasRDI": true,
                "daily": 150.1038076923077,
                "unit": "mg"
              },
              {
                "label": "Folate equivalent (total)",
                "tag": "FOLDFE",
                "schemaOrgTag": null,
                "total": 803.3365,
                "hasRDI": true,
                "daily": 200.83412499999997,
                "unit": "µg"
              },
              {
                "label": "Folate (food)",
                "tag": "FOLFD",
                "schemaOrgTag": null,
                "total": 415.7365,
                "hasRDI": false,
                "daily": 0,
                "unit": "µg"
              },
              {
                "label": "Folic acid",
                "tag": "FOLAC",
                "schemaOrgTag": null,
                "total": 228,
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
                "total": 31.66587999999999,
                "hasRDI": true,
                "daily": 211.10586666666663,
                "unit": "mg"
              },
              {
                "label": "Vitamin K",
                "tag": "VITK1",
                "schemaOrgTag": null,
                "total": 191.62865000000002,
                "hasRDI": true,
                "daily": 159.6905416666667,
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
                "total": 1373.40977,
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
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_a56f2137f156fe6204cdf0187cb0984b",
            "label": "Avocado and Grilled Veggie Torta",
            "image": "https://www.edamam.com/web-img/f9c/f9ccd5c017739c0e2e3dbc38afa12368.jpg",
            "source": "The Daily Meal",
            "url": "http://www.thedailymeal.com/recipes/avocado-and-grilled-veggie-torta-recipe",
            "shareAs": "http://www.edamam.com/recipe/avocado-and-grilled-veggie-torta-a56f2137f156fe6204cdf0187cb0984b/bell+pepper+sandwich+grilled/vegetarian/peanut-free",
            "yield": 4,
            "dietLabels": [],
            "healthLabels": [
              "Sugar-Conscious",
              "Vegetarian",
              "Peanut-Free",
              "Tree-Nut-Free",
              "Alcohol-Free"
            ],
            "cautions": [
              "Sulfites"
            ],
            "ingredientLines": [
              "1  Tablespoon   olive oil",
              "2   Red or yellow bell pepper, seeded and sliced",
              "1/2   Red onion, peeled and sliced",
              "1   Small zucchini, peeled and sliced",
              "1/2  Teaspoon   ground black pepper",
              "2   Ripe, fresh, avocados, seeded, peeled, diced, divided",
              "1  Teaspoon   hot pepper sauce",
              "2  Tablespoons   crumbled cotija cheese",
              "1   Telera (Mexican-style soft sandwich rolls)"
            ],
            "ingredients": [
              {
                "text": "1  Tablespoon   olive oil",
                "weight": 13.5
              },
              {
                "text": "2   Red or yellow bell pepper, seeded and sliced",
                "weight": 372
              },
              {
                "text": "1/2   Red onion, peeled and sliced",
                "weight": 62.5
              },
              {
                "text": "1   Small zucchini, peeled and sliced",
                "weight": 118
              },
              {
                "text": "1/2  Teaspoon   ground black pepper",
                "weight": 1.15
              },
              {
                "text": "2   Ripe, fresh, avocados, seeded, peeled, diced, divided",
                "weight": 402
              },
              {
                "text": "1  Teaspoon   hot pepper sauce",
                "weight": 4.7
              },
              {
                "text": "2  Tablespoons   crumbled cotija cheese",
                "weight": 36.999999999374445
              },
              {
                "text": "1   Telera (Mexican-style soft sandwich rolls)",
                "weight": 57
              }
            ],
            "calories": 1213.8734999977105,
            "totalWeight": 1067.8499999993746,
            "totalTime": 0,
            "totalNutrients": {
              "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 1213.8734999977105,
                "unit": "kcal"
              },
              "FAT": {
                "label": "Fat",
                "quantity": 87.26037999981233,
                "unit": "g"
              },
              "FASAT": {
                "label": "Saturated",
                "quantity": 17.490161999890528,
                "unit": "g"
              },
              "FAMS": {
                "label": "Monounsaturated",
                "quantity": 53.00174849994788,
                "unit": "g"
              },
              "FAPU": {
                "label": "Polyunsaturated",
                "quantity": 10.278638999992575,
                "unit": "g"
              },
              "CHOCDF": {
                "label": "Carbs",
                "quantity": 99.63387499997518,
                "unit": "g"
              },
              "FIBTG": {
                "label": "Fiber",
                "quantity": 34.140550000000005,
                "unit": "g"
              },
              "SUGAR": {
                "label": "Sugars",
                "quantity": 9.32868,
                "unit": "g"
              },
              "PROCNT": {
                "label": "Protein",
                "quantity": 27.06175499987489,
                "unit": "g"
              },
              "CHOLE": {
                "label": "Cholesterol",
                "quantity": 36.999999999374445,
                "unit": "mg"
              },
              "NA": {
                "label": "Sodium",
                "quantity": 1000.3209999912423,
                "unit": "mg"
              },
              "CA": {
                "label": "Calcium",
                "quantity": 478.17049999499557,
                "unit": "mg"
              },
              "MG": {
                "label": "Magnesium",
                "quantity": 220.36149999976232,
                "unit": "mg"
              },
              "K": {
                "label": "Potassium",
                "quantity": 3267.566499999218,
                "unit": "mg"
              },
              "FE": {
                "label": "Iron",
                "quantity": 6.569475000000001,
                "unit": "mg"
              },
              "ZN": {
                "label": "Zinc",
                "quantity": 5.675604999975792,
                "unit": "mg"
              },
              "P": {
                "label": "Phosphorus",
                "quantity": 690.3489999954397,
                "unit": "mg"
              },
              "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 162.5564999985675,
                "unit": "µg"
              },
              "VITC": {
                "label": "Vitamin C",
                "quantity": 752.0826,
                "unit": "mg"
              },
              "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 0.7414739999998187,
                "unit": "mg"
              },
              "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 1.12065899999696,
                "unit": "mg"
              },
              "NIA": {
                "label": "Niacin (B3)",
                "quantity": 13.385732499999289,
                "unit": "mg"
              },
              "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 1.9742454999996937,
                "unit": "mg"
              },
              "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 552.7824999999375,
                "unit": "µg"
              },
              "FOLFD": {
                "label": "Folate (food)",
                "quantity": 475.2624999999375,
                "unit": "µg"
              },
              "FOLAC": {
                "label": "Folic acid",
                "quantity": 45.60000000000001,
                "unit": "µg"
              },
              "VITB12": {
                "label": "Vitamin B12",
                "quantity": 0.8361999999858624,
                "unit": "µg"
              },
              "VITD": {
                "label": "Vitamin D",
                "quantity": 7.7699999998686335,
                "unit": "IU"
              },
              "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 10.762249999998437,
                "unit": "mg"
              },
              "VITK1": {
                "label": "Vitamin K",
                "quantity": 100.91134999998812,
                "unit": "µg"
              },
              "WATER": {
                "label": "Water",
                "quantity": 840.3472999997623,
                "unit": "g"
              }
            },
            "totalDaily": {
              "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 60.69367499988552,
                "unit": "%"
              },
              "FAT": {
                "label": "Fat",
                "quantity": 134.24673846124972,
                "unit": "%"
              },
              "FASAT": {
                "label": "Saturated",
                "quantity": 87.45080999945264,
                "unit": "%"
              },
              "CHOCDF": {
                "label": "Carbs",
                "quantity": 33.21129166665839,
                "unit": "%"
              },
              "FIBTG": {
                "label": "Fiber",
                "quantity": 136.56220000000002,
                "unit": "%"
              },
              "PROCNT": {
                "label": "Protein",
                "quantity": 54.12350999974978,
                "unit": "%"
              },
              "CHOLE": {
                "label": "Cholesterol",
                "quantity": 12.333333333124815,
                "unit": "%"
              },
              "NA": {
                "label": "Sodium",
                "quantity": 41.68004166630176,
                "unit": "%"
              },
              "CA": {
                "label": "Calcium",
                "quantity": 47.81704999949955,
                "unit": "%"
              },
              "MG": {
                "label": "Magnesium",
                "quantity": 52.467023809467214,
                "unit": "%"
              },
              "K": {
                "label": "Potassium",
                "quantity": 69.52269148934506,
                "unit": "%"
              },
              "FE": {
                "label": "Iron",
                "quantity": 36.497083333333336,
                "unit": "%"
              },
              "ZN": {
                "label": "Zinc",
                "quantity": 51.596409090689015,
                "unit": "%"
              },
              "P": {
                "label": "Phosphorus",
                "quantity": 98.62128571363424,
                "unit": "%"
              },
              "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 18.061833333174164,
                "unit": "%"
              },
              "VITC": {
                "label": "Vitamin C",
                "quantity": 835.6473333333332,
                "unit": "%"
              },
              "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 61.7894999999849,
                "unit": "%"
              },
              "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 86.20453846130461,
                "unit": "%"
              },
              "NIA": {
                "label": "Niacin (B3)",
                "quantity": 83.66082812499556,
                "unit": "%"
              },
              "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 151.8650384615149,
                "unit": "%"
              },
              "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 138.19562499998437,
                "unit": "%"
              },
              "VITB12": {
                "label": "Vitamin B12",
                "quantity": 34.8416666660776,
                "unit": "%"
              },
              "VITD": {
                "label": "Vitamin D",
                "quantity": 51.799999999124225,
                "unit": "%"
              },
              "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 71.74833333332292,
                "unit": "%"
              },
              "VITK1": {
                "label": "Vitamin K",
                "quantity": 84.09279166665677,
                "unit": "%"
              }
            },
            "digest": [
              {
                "label": "Fat",
                "tag": "FAT",
                "schemaOrgTag": "fatContent",
                "total": 87.26037999981233,
                "hasRDI": true,
                "daily": 134.24673846124972,
                "unit": "g",
                "sub": [
                  {
                    "label": "Saturated",
                    "tag": "FASAT",
                    "schemaOrgTag": "saturatedFatContent",
                    "total": 17.490161999890528,
                    "hasRDI": true,
                    "daily": 87.45080999945264,
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
                    "total": 53.00174849994788,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Polyunsaturated",
                    "tag": "FAPU",
                    "schemaOrgTag": null,
                    "total": 10.278638999992575,
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
                "total": 99.63387499997518,
                "hasRDI": true,
                "daily": 33.21129166665839,
                "unit": "g",
                "sub": [
                  {
                    "label": "Carbs (net)",
                    "tag": "CHOCDF.net",
                    "schemaOrgTag": null,
                    "total": 65.49332499997517,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Fiber",
                    "tag": "FIBTG",
                    "schemaOrgTag": "fiberContent",
                    "total": 34.140550000000005,
                    "hasRDI": true,
                    "daily": 136.56220000000002,
                    "unit": "g"
                  },
                  {
                    "label": "Sugars",
                    "tag": "SUGAR",
                    "schemaOrgTag": "sugarContent",
                    "total": 9.32868,
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
                "total": 27.06175499987489,
                "hasRDI": true,
                "daily": 54.12350999974978,
                "unit": "g"
              },
              {
                "label": "Cholesterol",
                "tag": "CHOLE",
                "schemaOrgTag": "cholesterolContent",
                "total": 36.999999999374445,
                "hasRDI": true,
                "daily": 12.333333333124815,
                "unit": "mg"
              },
              {
                "label": "Sodium",
                "tag": "NA",
                "schemaOrgTag": "sodiumContent",
                "total": 1000.3209999912423,
                "hasRDI": true,
                "daily": 41.68004166630176,
                "unit": "mg"
              },
              {
                "label": "Calcium",
                "tag": "CA",
                "schemaOrgTag": null,
                "total": 478.17049999499557,
                "hasRDI": true,
                "daily": 47.81704999949955,
                "unit": "mg"
              },
              {
                "label": "Magnesium",
                "tag": "MG",
                "schemaOrgTag": null,
                "total": 220.36149999976232,
                "hasRDI": true,
                "daily": 52.467023809467214,
                "unit": "mg"
              },
              {
                "label": "Potassium",
                "tag": "K",
                "schemaOrgTag": null,
                "total": 3267.566499999218,
                "hasRDI": true,
                "daily": 69.52269148934506,
                "unit": "mg"
              },
              {
                "label": "Iron",
                "tag": "FE",
                "schemaOrgTag": null,
                "total": 6.569475000000001,
                "hasRDI": true,
                "daily": 36.497083333333336,
                "unit": "mg"
              },
              {
                "label": "Zinc",
                "tag": "ZN",
                "schemaOrgTag": null,
                "total": 5.675604999975792,
                "hasRDI": true,
                "daily": 51.596409090689015,
                "unit": "mg"
              },
              {
                "label": "Phosphorus",
                "tag": "P",
                "schemaOrgTag": null,
                "total": 690.3489999954397,
                "hasRDI": true,
                "daily": 98.62128571363424,
                "unit": "mg"
              },
              {
                "label": "Vitamin A",
                "tag": "VITA_RAE",
                "schemaOrgTag": null,
                "total": 162.5564999985675,
                "hasRDI": true,
                "daily": 18.061833333174164,
                "unit": "µg"
              },
              {
                "label": "Vitamin C",
                "tag": "VITC",
                "schemaOrgTag": null,
                "total": 752.0826,
                "hasRDI": true,
                "daily": 835.6473333333332,
                "unit": "mg"
              },
              {
                "label": "Thiamin (B1)",
                "tag": "THIA",
                "schemaOrgTag": null,
                "total": 0.7414739999998187,
                "hasRDI": true,
                "daily": 61.7894999999849,
                "unit": "mg"
              },
              {
                "label": "Riboflavin (B2)",
                "tag": "RIBF",
                "schemaOrgTag": null,
                "total": 1.12065899999696,
                "hasRDI": true,
                "daily": 86.20453846130461,
                "unit": "mg"
              },
              {
                "label": "Niacin (B3)",
                "tag": "NIA",
                "schemaOrgTag": null,
                "total": 13.385732499999289,
                "hasRDI": true,
                "daily": 83.66082812499556,
                "unit": "mg"
              },
              {
                "label": "Vitamin B6",
                "tag": "VITB6A",
                "schemaOrgTag": null,
                "total": 1.9742454999996937,
                "hasRDI": true,
                "daily": 151.8650384615149,
                "unit": "mg"
              },
              {
                "label": "Folate equivalent (total)",
                "tag": "FOLDFE",
                "schemaOrgTag": null,
                "total": 552.7824999999375,
                "hasRDI": true,
                "daily": 138.19562499998437,
                "unit": "µg"
              },
              {
                "label": "Folate (food)",
                "tag": "FOLFD",
                "schemaOrgTag": null,
                "total": 475.2624999999375,
                "hasRDI": false,
                "daily": 0,
                "unit": "µg"
              },
              {
                "label": "Folic acid",
                "tag": "FOLAC",
                "schemaOrgTag": null,
                "total": 45.60000000000001,
                "hasRDI": false,
                "daily": 0,
                "unit": "µg"
              },
              {
                "label": "Vitamin B12",
                "tag": "VITB12",
                "schemaOrgTag": null,
                "total": 0.8361999999858624,
                "hasRDI": true,
                "daily": 34.8416666660776,
                "unit": "µg"
              },
              {
                "label": "Vitamin D",
                "tag": "VITD",
                "schemaOrgTag": null,
                "total": 7.7699999998686335,
                "hasRDI": true,
                "daily": 51.799999999124225,
                "unit": "µg"
              },
              {
                "label": "Vitamin E",
                "tag": "TOCPHA",
                "schemaOrgTag": null,
                "total": 10.762249999998437,
                "hasRDI": true,
                "daily": 71.74833333332292,
                "unit": "mg"
              },
              {
                "label": "Vitamin K",
                "tag": "VITK1",
                "schemaOrgTag": null,
                "total": 100.91134999998812,
                "hasRDI": true,
                "daily": 84.09279166665677,
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
                "total": 840.3472999997623,
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
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_4e7af95deb7cc9ccf7a8c0bb5f0508b8",
            "label": "Grilled-Vegetable Sandwich",
            "image": "https://www.edamam.com/web-img/6e8/6e80f314f02d70f5ff5da803fab89f12.jpg",
            "source": "Delish",
            "url": "http://www.delish.com/cooking/recipe-ideas/recipes/a2979/grilled-vegetable-sandwich-recipe-7765/",
            "shareAs": "http://www.edamam.com/recipe/grilled-vegetable-sandwich-4e7af95deb7cc9ccf7a8c0bb5f0508b8/bell+pepper+sandwich+grilled/vegetarian/peanut-free",
            "yield": 4,
            "dietLabels": [],
            "healthLabels": [
              "Vegetarian",
              "Peanut-Free"
            ],
            "cautions": [
              "FODMAP"
            ],
            "ingredientLines": [
              "1 tsp. dried oregano",
              "2 tbsp. chopped fresh basil (optional)",
              "½ tsp. salt",
              "½ tsp. fresh-ground black pepper",
              "1½ tsp. Wine vinegar",
              "¾ c. olive oil",
              "1 eggplant",
              "1 zucchini",
              "2 red bell peppers",
              "1 red onion",
              "4 large crusty rolls",
              "4 tbsp. store-bought or homemade pesto",
              "4 leaves romaine lettuce",
              "2 tomatoes"
            ],
            "ingredients": [
              {
                "text": "1 tsp. dried oregano",
                "weight": 1
              },
              {
                "text": "½ tsp. salt",
                "weight": 3
              },
              {
                "text": "½ tsp. fresh-ground black pepper",
                "weight": 1.45
              },
              {
                "text": "1½ tsp. Wine vinegar",
                "weight": 7.5
              },
              {
                "text": "¾ c. olive oil",
                "weight": 162
              },
              {
                "text": "1 eggplant",
                "weight": 548
              },
              {
                "text": "1 zucchini",
                "weight": 196
              },
              {
                "text": "2 red bell peppers",
                "weight": 238
              },
              {
                "text": "1 red onion",
                "weight": 125
              },
              {
                "text": "4 large crusty rolls",
                "weight": 285
              },
              {
                "text": "4 tbsp. store-bought or homemade pesto",
                "weight": 68
              },
              {
                "text": "4 leaves romaine lettuce",
                "weight": 24
              },
              {
                "text": "2 tomatoes",
                "weight": 246
              }
            ],
            "calories": 2843.3868033707868,
            "totalWeight": 1904.95,
            "totalTime": 0,
            "totalNutrients": {
              "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 2843.3868033707868,
                "unit": "kcal"
              },
              "FAT": {
                "label": "Fat",
                "quantity": 198.75492842696627,
                "unit": "g"
              },
              "FASAT": {
                "label": "Saturated",
                "quantity": 27.54288253932584,
                "unit": "g"
              },
              "FAMS": {
                "label": "Monounsaturated",
                "quantity": 121.65551550000002,
                "unit": "g"
              },
              "FAPU": {
                "label": "Polyunsaturated",
                "quantity": 22.999841,
                "unit": "g"
              },
              "CHOCDF": {
                "label": "Carbs",
                "quantity": 231.8661896067416,
                "unit": "g"
              },
              "FIBTG": {
                "label": "Fiber",
                "quantity": 37.47191741573033,
                "unit": "g"
              },
              "SUGAR": {
                "label": "Sugars",
                "quantity": 51.393480000000004,
                "unit": "g"
              },
              "PROCNT": {
                "label": "Protein",
                "quantity": 45.788855000000005,
                "unit": "g"
              },
              "CHOLE": {
                "label": "Cholesterol",
                "quantity": 5.348314606741573,
                "unit": "mg"
              },
              "NA": {
                "label": "Sodium",
                "quantity": 3452.4500000000007,
                "unit": "mg"
              },
              "CA": {
                "label": "Calcium",
                "quantity": 568.0041741573034,
                "unit": "mg"
              },
              "MG": {
                "label": "Magnesium",
                "quantity": 265.7145,
                "unit": "mg"
              },
              "K": {
                "label": "Potassium",
                "quantity": 3435.1405000000004,
                "unit": "mg"
              },
              "FE": {
                "label": "Iron",
                "quantity": 16.663746123595505,
                "unit": "mg"
              },
              "ZN": {
                "label": "Zinc",
                "quantity": 5.511805,
                "unit": "mg"
              },
              "P": {
                "label": "Phosphorus",
                "quantity": 659.441,
                "unit": "mg"
              },
              "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 607.9414999999999,
                "unit": "µg"
              },
              "VITC": {
                "label": "Vitamin C",
                "quantity": 395.001,
                "unit": "mg"
              },
              "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 1.9618760000000002,
                "unit": "mg"
              },
              "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 1.6513600000000002,
                "unit": "mg"
              },
              "NIA": {
                "label": "Niacin (B3)",
                "quantity": 20.5959835,
                "unit": "mg"
              },
              "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 1.9513495,
                "unit": "mg"
              },
              "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 803.3365,
                "unit": "µg"
              },
              "FOLFD": {
                "label": "Folate (food)",
                "quantity": 415.7365,
                "unit": "µg"
              },
              "FOLAC": {
                "label": "Folic acid",
                "quantity": 228,
                "unit": "µg"
              },
              "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 31.66587999999999,
                "unit": "mg"
              },
              "VITK1": {
                "label": "Vitamin K",
                "quantity": 191.62865000000002,
                "unit": "µg"
              },
              "WATER": {
                "label": "Water",
                "quantity": 1373.40977,
                "unit": "g"
              }
            },
            "totalDaily": {
              "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 142.16934016853935,
                "unit": "%"
              },
              "FAT": {
                "label": "Fat",
                "quantity": 305.77681296456353,
                "unit": "%"
              },
              "FASAT": {
                "label": "Saturated",
                "quantity": 137.7144126966292,
                "unit": "%"
              },
              "CHOCDF": {
                "label": "Carbs",
                "quantity": 77.28872986891388,
                "unit": "%"
              },
              "FIBTG": {
                "label": "Fiber",
                "quantity": 149.88766966292133,
                "unit": "%"
              },
              "PROCNT": {
                "label": "Protein",
                "quantity": 91.57771000000001,
                "unit": "%"
              },
              "CHOLE": {
                "label": "Cholesterol",
                "quantity": 1.7827715355805243,
                "unit": "%"
              },
              "NA": {
                "label": "Sodium",
                "quantity": 143.85208333333335,
                "unit": "%"
              },
              "CA": {
                "label": "Calcium",
                "quantity": 56.800417415730344,
                "unit": "%"
              },
              "MG": {
                "label": "Magnesium",
                "quantity": 63.265357142857134,
                "unit": "%"
              },
              "K": {
                "label": "Potassium",
                "quantity": 73.08809574468086,
                "unit": "%"
              },
              "FE": {
                "label": "Iron",
                "quantity": 92.57636735330837,
                "unit": "%"
              },
              "ZN": {
                "label": "Zinc",
                "quantity": 50.10731818181818,
                "unit": "%"
              },
              "P": {
                "label": "Phosphorus",
                "quantity": 94.20585714285716,
                "unit": "%"
              },
              "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 67.54905555555555,
                "unit": "%"
              },
              "VITC": {
                "label": "Vitamin C",
                "quantity": 438.89,
                "unit": "%"
              },
              "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 163.4896666666667,
                "unit": "%"
              },
              "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 127.02769230769232,
                "unit": "%"
              },
              "NIA": {
                "label": "Niacin (B3)",
                "quantity": 128.72489687499998,
                "unit": "%"
              },
              "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 150.1038076923077,
                "unit": "%"
              },
              "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 200.83412499999997,
                "unit": "%"
              },
              "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 211.10586666666663,
                "unit": "%"
              },
              "VITK1": {
                "label": "Vitamin K",
                "quantity": 159.6905416666667,
                "unit": "%"
              }
            },
            "digest": [
              {
                "label": "Fat",
                "tag": "FAT",
                "schemaOrgTag": "fatContent",
                "total": 198.75492842696627,
                "hasRDI": true,
                "daily": 305.77681296456353,
                "unit": "g",
                "sub": [
                  {
                    "label": "Saturated",
                    "tag": "FASAT",
                    "schemaOrgTag": "saturatedFatContent",
                    "total": 27.54288253932584,
                    "hasRDI": true,
                    "daily": 137.7144126966292,
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
                    "total": 121.65551550000002,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Polyunsaturated",
                    "tag": "FAPU",
                    "schemaOrgTag": null,
                    "total": 22.999841,
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
                "total": 231.8661896067416,
                "hasRDI": true,
                "daily": 77.28872986891388,
                "unit": "g",
                "sub": [
                  {
                    "label": "Carbs (net)",
                    "tag": "CHOCDF.net",
                    "schemaOrgTag": null,
                    "total": 194.39427219101128,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Fiber",
                    "tag": "FIBTG",
                    "schemaOrgTag": "fiberContent",
                    "total": 37.47191741573033,
                    "hasRDI": true,
                    "daily": 149.88766966292133,
                    "unit": "g"
                  },
                  {
                    "label": "Sugars",
                    "tag": "SUGAR",
                    "schemaOrgTag": "sugarContent",
                    "total": 51.393480000000004,
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
                "total": 45.788855000000005,
                "hasRDI": true,
                "daily": 91.57771000000001,
                "unit": "g"
              },
              {
                "label": "Cholesterol",
                "tag": "CHOLE",
                "schemaOrgTag": "cholesterolContent",
                "total": 5.348314606741573,
                "hasRDI": true,
                "daily": 1.7827715355805243,
                "unit": "mg"
              },
              {
                "label": "Sodium",
                "tag": "NA",
                "schemaOrgTag": "sodiumContent",
                "total": 3452.4500000000007,
                "hasRDI": true,
                "daily": 143.85208333333335,
                "unit": "mg"
              },
              {
                "label": "Calcium",
                "tag": "CA",
                "schemaOrgTag": null,
                "total": 568.0041741573034,
                "hasRDI": true,
                "daily": 56.800417415730344,
                "unit": "mg"
              },
              {
                "label": "Magnesium",
                "tag": "MG",
                "schemaOrgTag": null,
                "total": 265.7145,
                "hasRDI": true,
                "daily": 63.265357142857134,
                "unit": "mg"
              },
              {
                "label": "Potassium",
                "tag": "K",
                "schemaOrgTag": null,
                "total": 3435.1405000000004,
                "hasRDI": true,
                "daily": 73.08809574468086,
                "unit": "mg"
              },
              {
                "label": "Iron",
                "tag": "FE",
                "schemaOrgTag": null,
                "total": 16.663746123595505,
                "hasRDI": true,
                "daily": 92.57636735330837,
                "unit": "mg"
              },
              {
                "label": "Zinc",
                "tag": "ZN",
                "schemaOrgTag": null,
                "total": 5.511805,
                "hasRDI": true,
                "daily": 50.10731818181818,
                "unit": "mg"
              },
              {
                "label": "Phosphorus",
                "tag": "P",
                "schemaOrgTag": null,
                "total": 659.441,
                "hasRDI": true,
                "daily": 94.20585714285716,
                "unit": "mg"
              },
              {
                "label": "Vitamin A",
                "tag": "VITA_RAE",
                "schemaOrgTag": null,
                "total": 607.9414999999999,
                "hasRDI": true,
                "daily": 67.54905555555555,
                "unit": "µg"
              },
              {
                "label": "Vitamin C",
                "tag": "VITC",
                "schemaOrgTag": null,
                "total": 395.001,
                "hasRDI": true,
                "daily": 438.89,
                "unit": "mg"
              },
              {
                "label": "Thiamin (B1)",
                "tag": "THIA",
                "schemaOrgTag": null,
                "total": 1.9618760000000002,
                "hasRDI": true,
                "daily": 163.4896666666667,
                "unit": "mg"
              },
              {
                "label": "Riboflavin (B2)",
                "tag": "RIBF",
                "schemaOrgTag": null,
                "total": 1.6513600000000002,
                "hasRDI": true,
                "daily": 127.02769230769232,
                "unit": "mg"
              },
              {
                "label": "Niacin (B3)",
                "tag": "NIA",
                "schemaOrgTag": null,
                "total": 20.5959835,
                "hasRDI": true,
                "daily": 128.72489687499998,
                "unit": "mg"
              },
              {
                "label": "Vitamin B6",
                "tag": "VITB6A",
                "schemaOrgTag": null,
                "total": 1.9513495,
                "hasRDI": true,
                "daily": 150.1038076923077,
                "unit": "mg"
              },
              {
                "label": "Folate equivalent (total)",
                "tag": "FOLDFE",
                "schemaOrgTag": null,
                "total": 803.3365,
                "hasRDI": true,
                "daily": 200.83412499999997,
                "unit": "µg"
              },
              {
                "label": "Folate (food)",
                "tag": "FOLFD",
                "schemaOrgTag": null,
                "total": 415.7365,
                "hasRDI": false,
                "daily": 0,
                "unit": "µg"
              },
              {
                "label": "Folic acid",
                "tag": "FOLAC",
                "schemaOrgTag": null,
                "total": 228,
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
                "total": 31.66587999999999,
                "hasRDI": true,
                "daily": 211.10586666666663,
                "unit": "mg"
              },
              {
                "label": "Vitamin K",
                "tag": "VITK1",
                "schemaOrgTag": null,
                "total": 191.62865000000002,
                "hasRDI": true,
                "daily": 159.6905416666667,
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
                "total": 1373.40977,
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
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_7b619aec0def44857cd90e6772de98be",
            "label": "Grilled Portabella and Bulgur Salad \"Sandwiches\"",
            "image": "https://www.edamam.com/web-img/c64/c64ba585d5d0a2cb07c8f6ea7547236f.jpg",
            "source": "Epicurious",
            "url": "https://www.epicurious.com/recipes/food/views/grilled-portabella-and-bulgur-salad-sandwiches-353671",
            "shareAs": "http://www.edamam.com/recipe/grilled-portabella-and-bulgur-salad-sandwiches-7b619aec0def44857cd90e6772de98be/bell+pepper+sandwich+grilled/vegetarian/peanut-free",
            "yield": 4,
            "dietLabels": [],
            "healthLabels": [
              "Vegan",
              "Vegetarian",
              "Peanut-Free",
              "Alcohol-Free"
            ],
            "cautions": [
              "Sulfites"
            ],
            "ingredientLines": [
              "1 large garlic clove",
              "1 pint grape or cherry tomatoes",
              "1/2 cup flat-leaf parsley leaves",
              "1/3 cup extra-virgin olive oil",
              "1/4 cup red-wine vinegar",
              "1 tablespoon finely chopped rosemary",
              "1/4 teaspoon hot red-pepper flakes",
              "8 large portabella mushrooms, stems reserved for another use (see cooks' note, below)",
              "1 small red onion, cut lengthwise into 1/2-inch-thick wedges (keeping root end intact)",
              "2 medium yellow bell peppers, quartered lengthwise",
              "1 medium zucchini, halved lengthwise",
              "1 1/2 tablespoons extra-virgin olive oil",
              "1 1/2 cups boiling-hot water",
              "1 cup medium bulgur",
              "1/4 cup pine nuts, toasted",
              "2 1/2 ounces baby arugula (4 cups)",
              "1 firm-ripe small avocado"
            ],
            "ingredients": [
              {
                "text": "1 large garlic clove",
                "weight": 5
              },
              {
                "text": "1 pint grape or cherry tomatoes",
                "weight": 349.99999999999994
              },
              {
                "text": "1/2 cup flat-leaf parsley leaves",
                "weight": 30
              },
              {
                "text": "1/3 cup extra-virgin olive oil",
                "weight": 72
              },
              {
                "text": "1/4 cup red-wine vinegar",
                "weight": 59.75
              },
              {
                "text": "1 tablespoon finely chopped rosemary",
                "weight": 1.7
              },
              {
                "text": "1/4 teaspoon hot red-pepper flakes",
                "weight": 0.45
              },
              {
                "text": "8 large portabella mushrooms, stems reserved for another use (see cooks' note, below)",
                "weight": 960
              },
              {
                "text": "1 small red onion, cut lengthwise into 1/2-inch-thick wedges (keeping root end intact)",
                "weight": 70
              },
              {
                "text": "2 medium yellow bell peppers, quartered lengthwise",
                "weight": 372
              },
              {
                "text": "1 medium zucchini, halved lengthwise",
                "weight": 196
              },
              {
                "text": "1 1/2 tablespoons extra-virgin olive oil",
                "weight": 20.25
              },
              {
                "text": "1 1/2 cups boiling-hot water",
                "weight": 355.5
              },
              {
                "text": "1 cup medium bulgur",
                "weight": 140
              },
              {
                "text": "1/4 cup pine nuts, toasted",
                "weight": 33.75
              },
              {
                "text": "2 1/2 ounces baby arugula (4 cups)",
                "weight": 26.66666666666664
              },
              {
                "text": "1 firm-ripe small avocado",
                "weight": 150.75
              }
            ],
            "calories": 2238.5146666666665,
            "totalWeight": 2843.8166666666666,
            "totalTime": 0,
            "totalNutrients": {
              "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 2238.5146666666665,
                "unit": "kcal"
              },
              "FAT": {
                "label": "Fat",
                "quantity": 145.44056,
                "unit": "g"
              },
              "FASAT": {
                "label": "Saturated",
                "quantity": 19.034296833333336,
                "unit": "g"
              },
              "FATRN": {
                "label": "Trans",
                "quantity": 0.0384,
                "unit": "g"
              },
              "FAMS": {
                "label": "Monounsaturated",
                "quantity": 89.11893666666666,
                "unit": "g"
              },
              "FAPU": {
                "label": "Polyunsaturated",
                "quantity": 26.493108666666668,
                "unit": "g"
              },
              "CHOCDF": {
                "label": "Carbs",
                "quantity": 215.69586833333335,
                "unit": "g"
              },
              "FIBTG": {
                "label": "Fiber",
                "quantity": 53.910766666666674,
                "unit": "g"
              },
              "SUGAR": {
                "label": "Sugars",
                "quantity": 44.75177166666667,
                "unit": "g"
              },
              "PROCNT": {
                "label": "Protein",
                "quantity": 57.070190000000004,
                "unit": "g"
              },
              "NA": {
                "label": "Sodium",
                "quantity": 211.11950000000002,
                "unit": "mg"
              },
              "CA": {
                "label": "Calcium",
                "quantity": 339.0141666666666,
                "unit": "mg"
              },
              "MG": {
                "label": "Magnesium",
                "quantity": 520.4093333333333,
                "unit": "mg"
              },
              "K": {
                "label": "Potassium",
                "quantity": 7562.219000000001,
                "unit": "mg"
              },
              "FE": {
                "label": "Iron",
                "quantity": 15.911858333333333,
                "unit": "mg"
              },
              "ZN": {
                "label": "Zinc",
                "quantity": 13.490053333333334,
                "unit": "mg"
              },
              "P": {
                "label": "Phosphorus",
                "quantity": 2043.4496666666666,
                "unit": "mg"
              },
              "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 384.5698333333333,
                "unit": "µg"
              },
              "VITC": {
                "label": "Vitamin C",
                "quantity": 832.65215,
                "unit": "mg"
              },
              "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 1.5187338333333333,
                "unit": "mg"
              },
              "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 2.108780333333333,
                "unit": "mg"
              },
              "NIA": {
                "label": "Niacin (B3)",
                "quantity": 61.32249933333333,
                "unit": "mg"
              },
              "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 3.752146166666667,
                "unit": "mg"
              },
              "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 723.6891666666666,
                "unit": "µg"
              },
              "FOLFD": {
                "label": "Folate (food)",
                "quantity": 723.6891666666666,
                "unit": "µg"
              },
              "VITB12": {
                "label": "Vitamin B12",
                "quantity": 0.48,
                "unit": "µg"
              },
              "VITD": {
                "label": "Vitamin D",
                "quantity": 96,
                "unit": "IU"
              },
              "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 22.40037666666667,
                "unit": "mg"
              },
              "VITK1": {
                "label": "Vitamin K",
                "quantity": 665.8076,
                "unit": "µg"
              },
              "WATER": {
                "label": "Water",
                "quantity": 2402.6121649999995,
                "unit": "g"
              }
            },
            "totalDaily": {
              "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 111.92573333333333,
                "unit": "%"
              },
              "FAT": {
                "label": "Fat",
                "quantity": 223.7547076923077,
                "unit": "%"
              },
              "FASAT": {
                "label": "Saturated",
                "quantity": 95.17148416666667,
                "unit": "%"
              },
              "CHOCDF": {
                "label": "Carbs",
                "quantity": 71.89862277777779,
                "unit": "%"
              },
              "FIBTG": {
                "label": "Fiber",
                "quantity": 215.6430666666667,
                "unit": "%"
              },
              "PROCNT": {
                "label": "Protein",
                "quantity": 114.14038000000001,
                "unit": "%"
              },
              "NA": {
                "label": "Sodium",
                "quantity": 8.796645833333333,
                "unit": "%"
              },
              "CA": {
                "label": "Calcium",
                "quantity": 33.901416666666655,
                "unit": "%"
              },
              "MG": {
                "label": "Magnesium",
                "quantity": 123.90698412698411,
                "unit": "%"
              },
              "K": {
                "label": "Potassium",
                "quantity": 160.8982765957447,
                "unit": "%"
              },
              "FE": {
                "label": "Iron",
                "quantity": 88.39921296296296,
                "unit": "%"
              },
              "ZN": {
                "label": "Zinc",
                "quantity": 122.63684848484849,
                "unit": "%"
              },
              "P": {
                "label": "Phosphorus",
                "quantity": 291.92138095238096,
                "unit": "%"
              },
              "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 42.72998148148148,
                "unit": "%"
              },
              "VITC": {
                "label": "Vitamin C",
                "quantity": 925.1690555555555,
                "unit": "%"
              },
              "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 126.56115277777778,
                "unit": "%"
              },
              "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 162.21387179487175,
                "unit": "%"
              },
              "NIA": {
                "label": "Niacin (B3)",
                "quantity": 383.26562083333334,
                "unit": "%"
              },
              "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 288.6266282051282,
                "unit": "%"
              },
              "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 180.92229166666664,
                "unit": "%"
              },
              "VITB12": {
                "label": "Vitamin B12",
                "quantity": 20,
                "unit": "%"
              },
              "VITD": {
                "label": "Vitamin D",
                "quantity": 640,
                "unit": "%"
              },
              "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 149.33584444444446,
                "unit": "%"
              },
              "VITK1": {
                "label": "Vitamin K",
                "quantity": 554.8396666666666,
                "unit": "%"
              }
            },
            "digest": [
              {
                "label": "Fat",
                "tag": "FAT",
                "schemaOrgTag": "fatContent",
                "total": 145.44056,
                "hasRDI": true,
                "daily": 223.7547076923077,
                "unit": "g",
                "sub": [
                  {
                    "label": "Saturated",
                    "tag": "FASAT",
                    "schemaOrgTag": "saturatedFatContent",
                    "total": 19.034296833333336,
                    "hasRDI": true,
                    "daily": 95.17148416666667,
                    "unit": "g"
                  },
                  {
                    "label": "Trans",
                    "tag": "FATRN",
                    "schemaOrgTag": "transFatContent",
                    "total": 0.0384,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Monounsaturated",
                    "tag": "FAMS",
                    "schemaOrgTag": null,
                    "total": 89.11893666666666,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Polyunsaturated",
                    "tag": "FAPU",
                    "schemaOrgTag": null,
                    "total": 26.493108666666668,
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
                "total": 215.69586833333335,
                "hasRDI": true,
                "daily": 71.89862277777779,
                "unit": "g",
                "sub": [
                  {
                    "label": "Carbs (net)",
                    "tag": "CHOCDF.net",
                    "schemaOrgTag": null,
                    "total": 161.78510166666666,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                  },
                  {
                    "label": "Fiber",
                    "tag": "FIBTG",
                    "schemaOrgTag": "fiberContent",
                    "total": 53.910766666666674,
                    "hasRDI": true,
                    "daily": 215.6430666666667,
                    "unit": "g"
                  },
                  {
                    "label": "Sugars",
                    "tag": "SUGAR",
                    "schemaOrgTag": "sugarContent",
                    "total": 44.75177166666667,
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
                "total": 57.070190000000004,
                "hasRDI": true,
                "daily": 114.14038000000001,
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
                "total": 211.11950000000002,
                "hasRDI": true,
                "daily": 8.796645833333333,
                "unit": "mg"
              },
              {
                "label": "Calcium",
                "tag": "CA",
                "schemaOrgTag": null,
                "total": 339.0141666666666,
                "hasRDI": true,
                "daily": 33.901416666666655,
                "unit": "mg"
              },
              {
                "label": "Magnesium",
                "tag": "MG",
                "schemaOrgTag": null,
                "total": 520.4093333333333,
                "hasRDI": true,
                "daily": 123.90698412698411,
                "unit": "mg"
              },
              {
                "label": "Potassium",
                "tag": "K",
                "schemaOrgTag": null,
                "total": 7562.219000000001,
                "hasRDI": true,
                "daily": 160.8982765957447,
                "unit": "mg"
              },
              {
                "label": "Iron",
                "tag": "FE",
                "schemaOrgTag": null,
                "total": 15.911858333333333,
                "hasRDI": true,
                "daily": 88.39921296296296,
                "unit": "mg"
              },
              {
                "label": "Zinc",
                "tag": "ZN",
                "schemaOrgTag": null,
                "total": 13.490053333333334,
                "hasRDI": true,
                "daily": 122.63684848484849,
                "unit": "mg"
              },
              {
                "label": "Phosphorus",
                "tag": "P",
                "schemaOrgTag": null,
                "total": 2043.4496666666666,
                "hasRDI": true,
                "daily": 291.92138095238096,
                "unit": "mg"
              },
              {
                "label": "Vitamin A",
                "tag": "VITA_RAE",
                "schemaOrgTag": null,
                "total": 384.5698333333333,
                "hasRDI": true,
                "daily": 42.72998148148148,
                "unit": "µg"
              },
              {
                "label": "Vitamin C",
                "tag": "VITC",
                "schemaOrgTag": null,
                "total": 832.65215,
                "hasRDI": true,
                "daily": 925.1690555555555,
                "unit": "mg"
              },
              {
                "label": "Thiamin (B1)",
                "tag": "THIA",
                "schemaOrgTag": null,
                "total": 1.5187338333333333,
                "hasRDI": true,
                "daily": 126.56115277777778,
                "unit": "mg"
              },
              {
                "label": "Riboflavin (B2)",
                "tag": "RIBF",
                "schemaOrgTag": null,
                "total": 2.108780333333333,
                "hasRDI": true,
                "daily": 162.21387179487175,
                "unit": "mg"
              },
              {
                "label": "Niacin (B3)",
                "tag": "NIA",
                "schemaOrgTag": null,
                "total": 61.32249933333333,
                "hasRDI": true,
                "daily": 383.26562083333334,
                "unit": "mg"
              },
              {
                "label": "Vitamin B6",
                "tag": "VITB6A",
                "schemaOrgTag": null,
                "total": 3.752146166666667,
                "hasRDI": true,
                "daily": 288.6266282051282,
                "unit": "mg"
              },
              {
                "label": "Folate equivalent (total)",
                "tag": "FOLDFE",
                "schemaOrgTag": null,
                "total": 723.6891666666666,
                "hasRDI": true,
                "daily": 180.92229166666664,
                "unit": "µg"
              },
              {
                "label": "Folate (food)",
                "tag": "FOLFD",
                "schemaOrgTag": null,
                "total": 723.6891666666666,
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
                "total": 0.48,
                "hasRDI": true,
                "daily": 20,
                "unit": "µg"
              },
              {
                "label": "Vitamin D",
                "tag": "VITD",
                "schemaOrgTag": null,
                "total": 96,
                "hasRDI": true,
                "daily": 640,
                "unit": "µg"
              },
              {
                "label": "Vitamin E",
                "tag": "TOCPHA",
                "schemaOrgTag": null,
                "total": 22.40037666666667,
                "hasRDI": true,
                "daily": 149.33584444444446,
                "unit": "mg"
              },
              {
                "label": "Vitamin K",
                "tag": "VITK1",
                "schemaOrgTag": null,
                "total": 665.8076,
                "hasRDI": true,
                "daily": 554.8396666666666,
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
                "total": 2402.6121649999995,
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
      "url": "https://api.edamam.com/search?q=bell pepper sandwich grilled&app_id=063ab359&app_key=87537f8acf10951583c43ab5434ae1d5&health=vegetarian&health=peanut-free",
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