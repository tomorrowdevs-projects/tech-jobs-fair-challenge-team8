from django.db import models


class Contact(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100, null=True)  # Nullable field
    company = models.CharField(max_length=100, null=True)  # Nullable field
    job_position = models.CharField(max_length=100, null=True)  # Nullable field
    address = models.CharField(max_length=255, null=True)  # Nullable field
    city = models.CharField(max_length=100, null=True)  # Nullable field
    zip_code = models.CharField(max_length=20, null=True)  # Nullable field
    country = models.CharField(max_length=100, null=True)  # Nullable field

    def __str__(self):
        return f"{self.surname} {self.name}"

    class Meta:
        verbose_name = "Contact"
        verbose_name_plural = "Contacts"
        ordering = ['surname', 'name']
        
    
class ContactInfo(models.Model):
    CONTACT_TYPE_CHOICES = [
        ('email', 'Email'),
        ('mobile', 'Mobile'),
        ('office', 'Office'),
        ('phone', 'Phone'),
    ]

    contact = models.ForeignKey(Contact, related_name='contact_info', on_delete=models.CASCADE)
    c_type = models.CharField(max_length=10, choices=CONTACT_TYPE_CHOICES)
    info = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.contact.name}'s {self.get_c_type_display()}: {self.info}"

    class Meta:
        verbose_name = "Contact Information"
        verbose_name_plural = "Contact Information"