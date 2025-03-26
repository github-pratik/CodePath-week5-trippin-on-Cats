# Web Development Project 4 - *Trippin' on Cats*

Submitted by: **Pratik Patil**

This web app: **A cat discovery application that allows users to explore random cat breeds, ban specific attributes they don't want to see, and keep track of cats they've already viewed**

Time spent: **9** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **Clicking a button creates a new API fetch request and displays at least three attributes from the returned JSON data**
- [x] **Only one item/API call is viewable at a time**
- [x] **API calls appear random to the user**
- [x] **At least one image is displayed per API call**
- [x] **Clicking on a displayed value for one attribute adds it to a displayed ban list**
  - [x] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**

The following **optional** features are implemented:

- [x] Multiple types of attributes can be added to the ban list
- [x] Users can see a stored history of their previously viewed items from their session

The following **additional** features are implemented:

* [x] Glass-style UI with blur effects for a modern, sleek appearance
* [x] Custom SVG cat pattern background for enhanced visual appeal
* [x] Responsive design with flexible layouts
* [x] Animated button hover effects for better user interaction
* [x] Thumbnail images in the seen cats history for quick visual recognition

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.

## Setup

1. Clone this repository
2. Run `npm install` to install dependencies
3. Create a `.env` file in the root directory based on `.env.example`
4. Get your API key from [The Cat API](https://thecatapi.com/) and add it to the `.env` file
5. Run `npm run dev` to start the development server

## Environment Variables

This app requires an API key from The Cat API. You need to create a `.env` file with the following variable:

```
VITE_CAT_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with your actual API key from The Cat API.

## License

    Copyright [2023] [Shashikant]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
