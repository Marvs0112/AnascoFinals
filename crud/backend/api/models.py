from django.db import models

# Create your models here.

class Item(models.Model):
    first_name = models.CharField(max_length=100, null=True)
    middle_name = models.CharField(max_length=100, null=True)
    last_name = models.CharField(max_length=100, null=True)
    name_ext = models.CharField(max_length=100, null=True)
    house_no = models.CharField(max_length=50, null=True)
    street = models.CharField(max_length=100, null=True)
    subd = models.CharField(max_length=100, null=True)
    barangay = models.CharField(max_length=100, null=True)
    city = models.CharField(max_length=100, null=True)
    province = models.CharField(max_length=100, null=True)
    country = models.CharField(max_length=100, null=True)
    postal = models.CharField(max_length=4, null=True)
    email = models.CharField(max_length=100, null=True)
    phone = models.CharField(max_length=50, null=True)
    date_of_birth = models.CharField(max_length=100, null=True)
    place_of_birth = models.CharField(max_length=100, null=True)
    sex = models.CharField(max_length=20, null=True)
    citizenship = models.CharField(max_length=100, null=True)
    civil_status = models.CharField(max_length=100, null=True)
    height = models.CharField(max_length=100, null=True)
    weight = models.CharField(max_length=100, null=True)
    blood_type = models.CharField(max_length=5, null=True)
    fathern = models.CharField(max_length=100, null=True)
    fatherm = models.CharField(max_length=100, null=True)
    fatherl = models.CharField(max_length=100, null=True)
    fatherext = models.CharField(max_length=100, null=True)
    mothern = models.CharField(max_length=100, null=True)
    motherm = models.CharField(max_length=100, null=True)
    motherl = models.CharField(max_length=100, null=True)
    

    def __str__(self) -> str:
        return super().__str__()