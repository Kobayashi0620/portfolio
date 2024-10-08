#! /home/xs601515/anaconda3/bin/python

from wsgiref.handlers import CGIHandler
from app import app
CGIHandler().run(app)