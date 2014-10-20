var mergeSorting = function(){
    var mergeCollections = function(part_1, part_2) {
        var result = [];

        var i = 0;
        var j = 0;

        while (i < part_1.length || j < part_2.length) {
            if (i >= part_1.length) {
                return result.concat(part_2.slice(j));
            } else if (j >= part_2.length) {
                return result.concat(part_1.slice(i));
            }

            if (part_1[i] < part_2[j]) {
                result.push(part_1[i]);
                i++;
            } else {
                result.push(part_2[j]);
                j++;
            }
        }

        return result;
    };

    var splitCollection = function(collection) {
        var middle = Math.floor(collection.length / 2);

        return {
            part_1: collection.slice(0, middle),
            part_2: collection.slice(middle)
        };
    };

    var mergeSort = function(collection){

        var splittedCollections = splitCollection(collection);

        if (splittedCollections.part_1.length > 1 || splittedCollections.part_2.length > 1) {
            splittedCollections.part_1 = mergeSort(splittedCollections.part_1);
            splittedCollections.part_2 = mergeSort(splittedCollections.part_2);
        }

        return mergeCollections(splittedCollections.part_1, splittedCollections.part_2);
    };


    return { sort: mergeSort }
}();





