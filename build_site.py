#!/usr/bin/env python3

from staticjinja import Site

STATIC_DIRS = [
    'static/',
    'downloads/'
]

ARTICLES_FOLDER = 'articles'

BUILD_DIR = 'build'

def get_news():
    """Retrieve all news articles and build the list"""
    # Locate news dir
    pass

if __name__ == "__main__":
    site = Site.make_site(
        staticpaths=STATIC_DIRS,
        outpath=BUILD_DIR
    )
    # enable automatic reloading
    site.render(use_reloader=True)
