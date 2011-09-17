import urllib2
import json
import os

MAX_MODEL_ENTITIES_TO_DOWNLOAD = 10

def get_json(url, data=None):
    return urllib2.urlopen(urllib2.Request(url, data, {'Content-Type': 'application/json'})).read()

def main():
    OUTPUT_DIRECTORY = 'rest'
    BASE_DIRECTORY = OUTPUT_DIRECTORY +'/models'
    base_url = 'http://dev.pivotalexpert.com'
    meta = base_url + '/rest/models/metadata'
    
    if not os.path.exists(BASE_DIRECTORY):
        os.makedirs(BASE_DIRECTORY)
        
    #Delete and remake output directory. 
    #Put in 
    #Write all fetched files to the static directory. 
    
    #save metadata
    result = get_json(meta, None)
    #Write result to disc
    filepath =  BASE_DIRECTORY+'/metadata'
    f = open(filepath, 'w')
    f.write(json.dumps(json.loads(result)))
    f.close()
    
    meta_dictionary = json.loads(result)
    print '*******', meta_dictionary
    for model_type in meta_dictionary['type']:
        print model_type
        #Make a directory for the model. 
        model_directory = BASE_DIRECTORY+'/'+model_type
        if not os.path.exists(model_directory):
        	os.makedirs(model_directory)
        #Fetch the list for each model. 
        url = base_url+'/rest/models/'+model_type
        result = get_json(url, None)
        
        #Write result to disc
        filepath = model_directory+'.json'
        f = open(filepath, 'w')
        #This avoids text escaping for some reason. 
        f.write(json.dumps(json.loads(result)))
        f.close()
        
        #Todo: This is a list of dictionaries
        model_dictionary = json.loads(result)
        
        #Add a case to check if there is only one item. 
        if type(model_dictionary) is dict:
            model_dictionary = [model_dictionary]
            
        if type(model_dictionary) is not list:
            print "ERROR - a list was not created from the API response."
            
        print "There are ", len(model_dictionary), model_type, "models."
        
        num_entities = min(MAX_MODEL_ENTITIES_TO_DOWNLOAD,len(model_dictionary))
        
        for x in range(num_entities):
            print "Fetching key", x, 'from', str(model_dictionary)
            model1 = model_dictionary[x]
            print "Model 1=", model1['key']
            
            #Fetch url
            url = base_url+'/rest/models/'+model_type+'/'+model1['key']
            result = get_json(url, None)
            d = json.loads(result)
            print "d=", d
            #Write result to disc
            filepath = model_directory+'/'+model1['key']
            f = open(filepath, 'w')
            f.write(json.dumps(d))
            f.close()
            
            attribute_dictionary = d
            for x in attribute_dictionary:
                pass
       	 	    #print x, '=', attribute_dictionary[x]
            
        #for model in model_dictionary['list'][model_type]:
        #  pass
          #print model

        

if __name__ == "__main__":
    main()
