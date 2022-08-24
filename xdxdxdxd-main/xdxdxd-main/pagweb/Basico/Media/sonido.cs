using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public class sonido : MonoBehaviour
{
     [Range(20,20000)]
        public float frecuencia;
        public float frecuenciaMuestro =44100;
        public float tiempoSeg =2.0f;
        AudioSource audioSource;
        int timeIndex=0;
    // Start is called before the first frame update
    void Start()
    {
       audioSource =gameObject.AddComponent<AudioSource>();
       audioSource.playOnAwake = false;
       audioSource.spatialBlend=0;
       audioSource.Stop();
        
    }

    // Update is called once per frame
    void Update()
    {
        if(Input.GetKeyDown(KeyCode.Space))
        {
            if(!audioSource.isPlaying)
            {
                timeIndex=0;
                audioSource.Play();
            }
            else
            {
                audioSource.Stop();
            }
        }
    }
 
    int funcion=0;
    void OnAudioFilterRead(float[] data,int channels)
    {
        if(funcion==0)
        {
        for(int i=0; i<data.Length;i+=channels)
        {
            data[i]=createSeno(timeIndex,frecuencia,frecuenciaMuestro);
            if (channels ==2)
              data[i+1]= createSeno(timeIndex,frecuencia,frecuenciaMuestro);
              timeIndex++;
            

              if(timeIndex>=(frecuencia*tiempoSeg))
              {
                timeIndex=0;
              }

            

        }
        }
        else if(funcion==1)
        {
           for(int i=0; i<data.Length;i+=channels)
        {
            data[i]=createSquare(timeIndex,frecuencia,frecuenciaMuestro);
            if (channels ==2)
              data[i+1]= createSquare(timeIndex,frecuencia,frecuenciaMuestro);
              timeIndex++;
            

              if(timeIndex>=(frecuencia*tiempoSeg))
              {
                timeIndex=0;
              }

            

        }  
        }
    }

    public float createSeno(int timeIndex, float frecuencia, float frecuenciaMuestro)
    {
        return Mathf.Sin(2* Mathf.PI* timeIndex*frecuencia  / frecuenciaMuestro);
    }

    public float createSquare(int timeIndex, float frecuencia, float frecuenciaMuestro)
    {
        if(Mathf.Sin(2 *Mathf.PI * frecuencia/ frecuenciaMuestro)>0)
          return 1;
        else if(Mathf.Sin(2 *Mathf.PI * frecuencia/ frecuenciaMuestro)<0)
          return -1;

        return 0;
    }

}
