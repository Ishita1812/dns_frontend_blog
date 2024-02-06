import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpcl: HttpClient) {}
  data=[
    {
      id: 1,
      title: 'Indian Food Details',
      content: 'Many types of meat are used for Indian cooking, but chicken and mutton tend to be the most commonly consumed meats. Fish and beef consumption are prevalent in some parts of India, but they are not widely consumed except for coastal areas, as well as the north east. Lentils are a staple ingredient in Indian cuisine.',
      author: 'Ishita Majila',
      date: "2023-12-25",
      tags: ["Indian Food", "Cooking"],
      url: './assets/1.jpeg'
    },
    {
      id: 2,
      title: 'Famous Junk Food',
      content: 'In this course you will learn the fundamentals of Angular framework. This course is purely designed for beginners and teaches you all the basic concepts of Angular step by step',
      author: 'Miss Sinha',
      date: "2023-10-22",
      tags: ["Junk Food", "Street Food"],
      url: './assets/2.jpeg'
    },
    
    
    {
      id: 3,
      title: 'Healthy Food',
      content: 'A healthy diet is essential for good health and nutrition. It protects you against many chronic noncommunicable diseases, such as heart disease, diabetes and cancer. Eating a variety of foods and consuming less salt, sugars and saturated and industrially-produced trans-fats, are essential for healthy diet.',
      author: 'Mr. Ray',
      date: "2024-01-01",
      tags: ["Healthy", "Food habits"],
      url: './assets/3.jpg'
    },
    
    {
      id: 4,
      title: 'North Indian Food',
      content: 'Staple Foods North Indians Seem to Prefer This region is home to the tandoori roti and naans, stuffed parathas.',
      author:'Dr. Banerjee',
      date: "2024-02-12",
      tags: ["Food", "North Indian"],
      url: './assets/4.jpeg'
    },
    
    {
      id: 5,
      title: 'South Indian Food',
      content: 'South Indian food is known for the use of generous coconut in their curries. Other basic and common ingredients include curry leaves, mustard oil, red chillies and oil etc. Here we have tried to demystify and explain the different cuisines of South India.',
      author: 'Mallika SG',
      date: "2024-02-14",
      tags: ["South Indian", "Food", "Blog"],
      url: './assets/5.jpeg'
    },
    
   ]
  
    addnewpost(blogPost: any) {
      this.data.push(blogPost);
      console.log(blogPost);
    }
  
  }
    