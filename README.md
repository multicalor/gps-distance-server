# gps-distance-server
endpoint 
api/get/distance

### For decimal minute second GPS formate
res:

    {
        "coordinateA":
        {
            "N": [46, 28, 10.2],
            "S": [30, 44, 17.6]
        },
        "coordinateB":
        {
            "N": [46, 28, 5.5], 
            "S": [30, 45, 10.5]
        }
    }

### For decimal minute GPS formate
res:

    {
        "coordinateA":
        {
            "N": [46, 28.17],
            "S": [30, 44.293]
        },
        "coordinateB":
        {
            "N": [46, 28.092], 
            "S": [30, 45.174]
        }
    }

### For decimal GPS formate
res:

    {
        "coordinateA":
        {
            "N": [46.469491951813154],
            "S": [30.738209829618707]
        },
        "coordinateB":
        {
            "N": [46.46819647081588], 
            "S": [30.752905788667615]
        }
    }


res: 

    {
        "status": 200,
        "data": 1.1346766858693673
    }

error res: 

    {
        "status": "coordinates entered incorrectly"
    }

error res: 

    {
        "message": "unexpected error on the server"
    }
